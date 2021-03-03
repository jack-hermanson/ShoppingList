from shopping_list import api
from .resources import NewItem, GetItems

URL_PREFIX = '/api/items'

api.add_resource(NewItem, f'{URL_PREFIX}/')
api.add_resource(GetItems, f'{URL_PREFIX}/')
