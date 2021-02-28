from flask import jsonify, session
from flask_restful import Resource
from .services import get_alert


class Alert(Resource):

    @staticmethod
    def get():
        return jsonify(get_alert())
