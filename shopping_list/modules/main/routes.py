from flask import Blueprint, request, jsonify
from datetime import datetime


main = Blueprint('main', __name__, url_prefix='/api')


@main.route('/')
def index():
    return jsonify({
        'hello': f'{datetime.now()}'
    })
