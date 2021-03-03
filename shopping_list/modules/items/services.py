from shopping_list import db
from .models import Item, GroupItem


def new(item: dict) -> dict:
    response: dict = {}

    new_item = Item(
        name=item.get('name'),
        notes=item.get('notes') if item.get('notes') else '',
        recurring=item.get('recurring')
    )
    db.session.add(new_item)
    db.session.commit()

    response['item'] = new_item.as_dict()

    if item.get('groups'):
        response['item']['groups'] = []

        for group_id in item.get('groups'):
            new_group_item = GroupItem(
                item_id=new_item.id,
                group_id=group_id
            )
            db.session.add(new_group_item)
            db.session.commit()
            response['item']['groups'].append(new_group_item.as_dict())

    return response


def get_all() -> list:
    return [item.as_dict() for item in Item.query.all()]
