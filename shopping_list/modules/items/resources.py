from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse



class Test(Resource):

    def get(self):
        return jsonify({'test': 'is here'})





