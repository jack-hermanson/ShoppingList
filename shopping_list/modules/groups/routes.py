from shopping_list import api
from .resources import New, All

URL_PREFIX = '/api/groups'

api.add_resource(New, f'{URL_PREFIX}/')
api.add_resource(All, f'{URL_PREFIX}/')
