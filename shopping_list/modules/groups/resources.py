from flask import jsonify
from flask_restful import Resource, reqparse
from ..alerts.services import set_alert
from . import services


class NewGroup(Resource):

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('notes', type=str, required=False)
        args: dict = parser.parse_args()

        new_group = services.new(args)
        return jsonify(new_group)


class GetGroups(Resource):

    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('order-by', type=str, required=False)
        args: dict = parser.parse_args()

        return jsonify(services.get_all())


class GetGroupIds(Resource):

    @staticmethod
    def get():
        return jsonify(services.get_all_ids())


class GetGroup(Resource):

    @staticmethod
    def get(group_id):
        return jsonify(services.get_one(group_id))

