from flask import Blueprint, request, jsonify


main = Blueprint('main', __name__, url_prefix='/api')


@main.route('/')
def index():
    return jsonify({
        'hello': 'world'
    })
