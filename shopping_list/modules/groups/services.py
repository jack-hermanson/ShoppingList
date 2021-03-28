from shopping_list import db
from .models import Group
from ..items.models import GroupItem
from typing import List


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


def delete_group(group_id: int, delete_items: bool) -> dict:
    group_items = GroupItem.query.filter(GroupItem.group_id == group_id).all()
    group = Group.query.get_or_404(group_id)
    group_name = group.name

    for group_item in group_items:
        if delete_items:
            db.session.delete(group_item.item)
        db.session.delete(group_item)

    db.session.delete(group)
    db.session.commit()

    return {
        'id': group_id,
        'deleteItems': delete_items,
        'name': group_name
    }


def edit_group(group_id: int, edited_group: dict) -> dict:
    group = Group.query.get_or_404(group_id)
    group.name = edited_group.get('name')
    group.notes = edited_group.get('notes')
    db.session.commit()

    return group.as_dict()

