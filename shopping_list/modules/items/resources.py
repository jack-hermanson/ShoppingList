from flask import jsonify
from flask_restful import Resource, reqparse
from . import services

from ..alerts.services import set_alert


def item_parser() -> dict:
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, required=True)
    parser.add_argument('notes', type=str, required=True)
    parser.add_argument('recurring', type=bool, required=True)
    parser.add_argument('checked', type=bool, required=False)
    parser.add_argument('groups', type=int, action='append', required=True)

    args: dict = parser.parse_args()
    return args


class NewItem(Resource):

    @staticmethod
    def post():
        args = item_parser()
        
        return jsonify(services.new(args))


class GetItems(Resource):

    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('order-by', type=str, required=False)
        parser.add_argument('group-id', type=int, required=False)
        args: dict = parser.parse_args()

        if args.get('group-id'):
            return jsonify(services.get_items_in_group(args.get('group-id')))
        else:
            return jsonify(services.get_all())


class DeleteItem(Resource):

    @staticmethod
    def delete():
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        args: dict = parser.parse_args()

        response = services.delete_item(args.get('id'))
        return jsonify(response)


class EditItem(Resource):

    @staticmethod
    def put(item_id):
        args = item_parser()

        return jsonify(services.edit_item(item_id, args))


class GetItem(Resource):

    @staticmethod
    def get(item_id):
        return jsonify(services.get_one(item_id))


class ToggleChecked(Resource):

    @staticmethod
    def put(item_id):
        parser = reqparse.RequestParser()
        parser.add_argument('checked', type=bool, required=True)
        args: dict = parser.parse_args()

        return jsonify(services.toggle_checked(item_id, args.get('checked')))


