from flask_restful import Api, Resource, reqparse
from flask import jsonify
import time


class HelloApiHandler(Resource):

    def get(self):
        time.sleep(2)
        return jsonify({
            'resultStatus': 'SUCCESS',
            'message': "Hello API handler"
        })

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)

        args = parser.parse_args()

        print(args)

        request_type = args['type']
        request_json = args['message']
        # ret_status, ret_msg = ReturnData(request_type, request_json)
        ret_status = request_type
        ret_msg = request_json

        if ret_msg:
            message = f'Message requested: {ret_msg}'
        else:
            message = 'No message'

        final_ret = {
            'status': 'Success',
            'message': message
        }

        return jsonify(final_ret)

