from shopping_list import db
from .models import Item, GroupItem
from ..groups.models import Group
from typing import List
from time import sleep


def new(item: dict) -> dict:
    new_item = Item(
        name=item.get('name'),
        notes=item.get('notes') if item.get('notes') else '',
        recurring=item.get('recurring'),
        checked=False
    )
    db.session.add(new_item)
    db.session.commit()

    if item.get('groups'):

        for group_id in item.get('groups'):
            new_group_item = GroupItem(
                item_id=new_item.id,
                group_id=group_id
            )
            db.session.add(new_group_item)
            db.session.commit()

    return new_item.as_dict()


def get_all() -> list:
    # sleep(1)  # testing only
    items = db.session.query(Item).join(GroupItem, Group).\
        filter(GroupItem.item_id == Item.id).\
        filter(GroupItem.group_id == Group.id)\
        .order_by(Item.name).all()
    return [item.as_dict() for item in items]


def get_items_in_group(group_id: int) -> list:
    return [
        item.as_dict() for item in
        db.session.query(Item).join(GroupItem).filter(GroupItem.group_id == group_id).all()
    ]


def delete_item(item_id: int) -> dict:
    item = Item.query.get_or_404(item_id)

    for group_item in item.group_items:
        db.session.delete(group_item)
    db.session.commit()

    db.session.delete(item)
    db.session.commit()

    return {
        'id': item_id,
        'name': item.name
    }


def edit_item(item_id: int, new_item: dict) -> dict:
    checked = new_item.get('checked')

    item = Item.query.get_or_404(item_id)
    item.name = new_item.get('name')
    item.notes = new_item.get('notes')
    item.recurring = new_item.get('recurring')
    item.checked = checked if checked is not None else item.checked
    db.session.commit()

    # groups
    req_group_ids = new_item.get('groups') or []

    for group_item in GroupItem.query.filter(GroupItem.item_id == item_id):
        db.session.delete(group_item)
    db.session.commit()

    for group_id in req_group_ids:
        group_item = GroupItem(item_id=item_id, group_id=group_id)
        db.session.add(group_item)
    db.session.commit()

    # sleep(1)  # for testing only
    return item.as_dict()


def get_one(item_id: int) -> dict:
    item = Item.query.get_or_404(item_id)
    return item.as_dict()


def toggle_checked(item_id: int, checked: bool) -> dict:
    item = Item.query.get_or_404(item_id)
    item.checked = checked
    db.session.commit()
    return {
        'id': item_id,
        'checked': item.checked
    }


def get_item_ids_in_group(group_id: int) -> List[int]:
    group_items = GroupItem.query.filter(GroupItem.group_id == group_id).all()
    return [group_item.item_id for group_item in group_items]
