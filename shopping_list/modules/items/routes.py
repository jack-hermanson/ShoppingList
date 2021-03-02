from shopping_list import api
from .resources import NewItem

URL_PREFIX = '/api/items'

api.add_resource(NewItem, f'{URL_PREFIX}/')
