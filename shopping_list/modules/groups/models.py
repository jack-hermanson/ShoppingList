from shopping_list import db


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    notes = db.Column(db.Text)
    group_items = db.relationship('GroupItem', backref='group', lazy=True)

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'notes': self.notes
        }
