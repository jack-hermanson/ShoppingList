from shopping_list import db
from .models import Item, GroupItem


def new(item: dict) -> dict:

    new_item = Item(
        name=item.get('name'),
        notes=item.get('notes') if item.get('notes') else '',
        recurring=item.get('recurring')
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
    return [item.as_dict() for item in Item.query.all()]


def get_items_in_group(group_id: int) -> list:
    group_items = GroupItem.query.filter(GroupItem.group_id == group_id).all()
    return [item.as_dict() for item in [
        group_item.item for group_item in group_items
    ]]


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
    item = Item.query.get_or_404(item_id)
    item.name = new_item.get('name')
    item.notes = new_item.get('notes')
    item.recurring = new_item.get('recurring')

    # groups
    req_group_ids = new_item.get('groups') or []
    # get existing GroupItems first
    current_group_item_ids = [
        group_item.item_id for group_item in
        GroupItem.query.filter(
            GroupItem.item_id == item_id
        ).all()
    ]
    # delete ones not in request
    for group_id in current_group_item_ids:
        if group_id not in req_group_ids:
            group_item = GroupItem.query.filter(
                GroupItem.item_id == item_id
            ).first_or_404()
            db.session.delete(group_item)
            db.session.commit()

    # add ones in request that don't already exist
    for group_id in req_group_ids:
        if group_id not in current_group_item_ids:
            group_item = GroupItem(
                item_id=item_id,
                group_id=group_id
            )
            db.session.add(group_item)
            db.session.commit()

    # done
    return item.as_dict()
