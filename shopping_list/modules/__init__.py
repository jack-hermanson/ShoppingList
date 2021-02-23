from flask import render_template, Blueprint

static = Blueprint('static', __name__)


@static.route('/')
def index():
    return render_template('index.html')
