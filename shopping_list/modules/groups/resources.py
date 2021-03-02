from flask import jsonify
from flask_restful import Resource, reqparse
from ..alerts.services import set_alert
from . import services


class New(Resource):

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('notes', type=str, required=False)
        args: dict = parser.parse_args()

        new_group = services.new(args)
        return jsonify(new_group)


class All(Resource):

    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('order-by', type=str, required=False)
        args: dict = parser.parse_args()

        return jsonify(services.get_all())

