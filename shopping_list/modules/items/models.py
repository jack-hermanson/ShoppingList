from shopping_list import db


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    notes = db.Column(db.Text)
    recurring = db.Column(db.Boolean)
    group_items = db.relationship('GroupItem', backref='item', lazy=True)


class GroupItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'))
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'))
