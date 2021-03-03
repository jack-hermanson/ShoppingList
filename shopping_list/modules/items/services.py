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
    item = Item.query.filter(Item.id == item_id).first_or_404()

    for group_item in item.group_items:
        db.session.delete(group_item)
    db.session.commit()

    db.session.delete(item)
    db.session.commit()

    return {
        'id': item_id,
        'name': item.name
    }
