from flask import jsonify
from flask_restful import Resource, reqparse
from . import services
import json

from ...logger import log


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
        log("NewItem resource hit", 1, json.dumps({
            "name": args.get("name"),
            "recurring": args.get("recurring"),
            "notes": args.get("notes"),
            "groups": args.get("groups")
        }))
        
        return jsonify(services.new(args))


class GetItems(Resource):

    @staticmethod
    def get():
        log("GetItems resource hit", 1)
        return jsonify(services.get_all())


class DeleteItem(Resource):

    @staticmethod
    def delete():
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        args: dict = parser.parse_args()

        log(f"Deleted item with ID {args.get('id')}", 1)

        response = services.delete_item(args.get('id'))
        return jsonify(response)


class EditItem(Resource):

    @staticmethod
    def put(item_id):
        args = item_parser()

        log(f"Edited item with ID {item_id}", 1)

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

        log(f"Toggle check item with ID {item_id}", 1)

        return jsonify(services.toggle_checked(item_id, args.get('checked')))


class GetItemsInGroup(Resource):

    @staticmethod
    def get(group_id):
        return jsonify(services.get_items_in_group(group_id))


