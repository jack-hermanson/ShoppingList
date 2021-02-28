from flask import jsonify
from flask_restful import Resource
from time import sleep


class Index(Resource):

    @staticmethod
    def get():
        sleep(1)
        return jsonify({'test': 'is here'})





