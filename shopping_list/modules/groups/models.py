from shopping_list import db


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    notes = db.Column(db.Text)
    group_items = db.relationship('GroupItem', backref='group', lazy=True)
