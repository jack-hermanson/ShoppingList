from flask_talisman import Talisman
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS

from shopping_list.config import Config

db = SQLAlchemy()
api = Api()


def create_app(config_class=Config):
    app = Flask(__name__,
                static_url_path='',
                static_folder='client/build')
    app.config.from_object(config_class)
    Talisman(app, content_security_policy=None)

    from shopping_list.modules.items import models
    from shopping_list.modules.groups import models

    db.app = app
    db.init_app(app)
    with app.app_context():
        db.create_all()

    api.app = app
    CORS(app)

    @app.route('/')
    def serve():
        return send_from_directory(app.static_folder, 'index.html')

    from .modules.items import routes
    from .modules.alerts import routes
    from .modules.groups import routes

    return app

