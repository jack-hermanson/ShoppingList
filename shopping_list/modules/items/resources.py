from flask import jsonify
from flask_restful import Resource
from ..alerts.services import set_alert


class Index(Resource):

    @staticmethod
    def get():
        set_alert("You have visited the /items endpoint.", "primary")
        return jsonify({'test': 'is here'})





