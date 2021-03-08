from shopping_list import db


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    notes = db.Column(db.Text)
    recurring = db.Column(db.Boolean)
    checked = db.Column(db.Boolean, default=False)
    group_items = db.relationship('GroupItem', backref='item', lazy=True)

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'notes': self.notes,
            'recurring': self.recurring,
            'groups': [
                {
                    'group_name': group_item.group.name,
                    'group_id': group_item.group.id
                }
                for group_item in self.group_items
            ]
        }


class GroupItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'))
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'))

    def as_dict(self):
        return {
            'item_id': self.item_id,
            'group_id': self.group_id,
            'group': self.group.as_dict(),
            'item': self.item.as_dict()
        }
