import flask_talisman
from flask_talisman import Talisman
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from shopping_list.config import Config

db = SQLAlchemy()


def create_app(config_class=Config):
    app = Flask(__name__,
                static_url_path='/static',
                static_folder='web/static',
                template_folder='web/templates')
    app.config.from_object(config_class)
    Talisman(app, content_security_policy=None)

    # import and register blueprints
    from shopping_list.modules.main.routes import main
    app.register_blueprint(main)

    db.app = app
    db.init_app(app)
    with app.app_context():
        db.create_all()

    return app

