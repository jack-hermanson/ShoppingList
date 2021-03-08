from flask import jsonify
from flask_restful import Resource, reqparse
from .services import get_alerts, set_alert


class Alert(Resource):

    @staticmethod
    def get():
        print("GET alerts resource")
        return jsonify(get_alerts())

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('text')
        parser.add_argument('color')
        args: dict = parser.parse_args()
        return jsonify(set_alert(args.get('text'), args.get('color')))
