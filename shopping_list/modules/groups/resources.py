from flask import jsonify
from flask_restful import Resource, reqparse
from . import services
import requests


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
        requests.post("https://jack-logger.herokuapp.com/api/logs", {
            "body": "Shopping list GetGroups resource hit",
            "appId": 1,
            "level": 1
        })
        return jsonify(services.get_all())


class GetGroupIds(Resource):

    @staticmethod
    def get():
        return jsonify(services.get_all_ids())


class GetGroup(Resource):

    @staticmethod
    def get(group_id):
        return jsonify(services.get_one(group_id))


class DeleteGroup(Resource):

    @staticmethod
    def delete(group_id):
        return jsonify(services.delete_group(group_id))


class EditGroup(Resource):

    @staticmethod
    def put(group_id):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('notes', type=str, required=True)
        args: dict = parser.parse_args()

        return jsonify(services.edit_group(group_id, args))


class CompleteGroup(Resource):

    @staticmethod
    def post(group_id):
        return jsonify(services.complete_group(group_id))

