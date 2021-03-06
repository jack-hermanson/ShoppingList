from shopping_list import api
from .resources import *

URL_PREFIX = '/api/items'

api.add_resource(NewItem, f'{URL_PREFIX}/')
api.add_resource(GetItems, f'{URL_PREFIX}/')
api.add_resource(DeleteItem, f'{URL_PREFIX}/')
api.add_resource(EditItem, f'{URL_PREFIX}/edit/<int:item_id>')
