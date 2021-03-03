from flask import jsonify
from flask_restful import Resource, reqparse
from . import services

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
        
        return jsonify(services.new(args))


class GetItems(Resource):

    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('order-by', type=str, required=False)
        args: dict = parser.parse_args()

        return jsonify(services.get_all())





