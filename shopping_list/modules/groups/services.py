from shopping_list import db
from .models import Group


def new(group: dict) -> dict:
    new_group = Group(
        name=group.get('name'),
        notes=group.get('notes')
    )
    db.session.add(new_group)
    db.session.commit()

    return new_group.as_dict()


def get_all() -> list:
    return [group.as_dict() for group in Group.query.all()]


def get_one(group_id: int) -> dict:
    group = Group.query.get_or_404(group_id)
    return group.as_dict()
