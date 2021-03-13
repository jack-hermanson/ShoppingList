from typing import List

from shopping_list import db


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    notes = db.Column(db.Text)
    group_items = db.relationship('GroupItem', backref='group', lazy=True)

    def as_dict(self, item_ids: List[int] = None):
        return {
            'id': self.id,
            'name': self.name,
            'notes': self.notes,
            'itemIds': item_ids if item_ids else []
        }
