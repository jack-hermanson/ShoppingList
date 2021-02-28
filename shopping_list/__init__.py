from flask_talisman import Talisman
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, reqparse

from shopping_list.config import Config

db = SQLAlchemy()
api = Api()


def create_app(config_class=Config):
    app = Flask(__name__,
                static_url_path='',
                static_folder='client/build')
    app.config.from_object(config_class)
    Talisman(app, content_security_policy=None)

    db.app = app
    db.init_app(app)
    with app.app_context():
        db.create_all()

    api.app = app
    # api.init_app(app)

    @app.route('/')
    def serve():
        return send_from_directory(app.static_folder, 'index.html')

    from .modules.items import routes

    return app

