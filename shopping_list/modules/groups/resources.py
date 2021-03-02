from flask import jsonify, session
from flask_restful import Resource, reqparse
from ..alerts.services import set_alert


class New(Resource):

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('notes', type=str, required=False)
        args: dict = parser.parse_args()
        print(args)
        return args


class All(Resource):

    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('test')
        args: dict = parser.parse_args()
        print(args)
        return args


