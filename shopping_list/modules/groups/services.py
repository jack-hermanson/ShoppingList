from sqlalchemy import and_

from shopping_list import db
from .models import Group
from ..items.models import GroupItem, Item
from typing import List

from ..items.services import delete_item


def new(group: dict) -> dict:
    new_group = Group(
        name=group.get('name'),
        notes=group.get('notes')
    )
    db.session.add(new_group)
    db.session.commit()

    return new_group.as_dict()


def get_all() -> list:
    return [group.as_dict() for group in Group.query.order_by(Group.name).all()]


def get_all_ids() -> List[int]:
    groups = Group.query.all()
    return [group.id for group in groups]


def get_one(group_id: int) -> dict:
    group = Group.query.get_or_404(group_id)
    return group.as_dict()


def delete_group(group_id: int) -> dict:
    group_items = GroupItem.query.filter(GroupItem.group_id == group_id).all()
    group = Group.query.get_or_404(group_id)
    group_name = group.name
    items_deleted = 0

    items_in_group = [group_item.item for group_item in group_items]
    for item in items_in_group:
        current_group_item = GroupItem.query.filter(and_(
            GroupItem.item_id == item.id,
            GroupItem.group_id == group_id
        )).first()
        other_group_items = GroupItem.query.filter(and_(
            GroupItem.item_id == item.id,
            GroupItem.group_id != group_id
        )).all()
        print(other_group_items)
        db.session.delete(current_group_item)
        if not other_group_items:
            db.session.delete(item)
            items_deleted += 1
        db.session.commit()
    db.session.delete(group)
    db.session.commit()

    return {
        'id': group_id,
        'name': group_name,
        'itemsDeleted': items_deleted
    }


def edit_group(group_id: int, edited_group: dict) -> dict:
    group = Group.query.get_or_404(group_id)
    group.name = edited_group.get('name')
    group.notes = edited_group.get('notes')
    db.session.commit()

    return group.as_dict()


def complete_group(group_id: int) -> dict:
    group = Group.query.get_or_404(group_id)
    for group_item in group.group_items:
        if group_item.item.checked:
            if group_item.item.recurring:
                group_item.item.checked = False
                db.session.commit()
            else:
                delete_item(group_item.item_id)
    return group.as_dict()

