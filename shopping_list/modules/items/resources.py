from flask import jsonify
from flask_restful import Resource, reqparse

from ..alerts.services import set_alert


class NewItem(Resource):

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('notes', type=str, required=False)
        parser.add_argument('recurring', type=bool, required=True)
        parser.add_argument('groups', type=int, action='append', required=False)
        args: dict = parser.parse_args()
        return jsonify(args)





