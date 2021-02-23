import os
from dotenv import load_dotenv
load_dotenv(verbose=True)


class Config:
    TEMPLATES_AUTO_RELOAD = True
    enviornment = os.environ.get('ENVIRONMENT')
    if os.environ.get('DATABASE_URL'):
        SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    else:
        SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
    SECRET_KEY = os.getenv('SECRET_KEY')


