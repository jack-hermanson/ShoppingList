from shopping_list import api
from .resources import *

URL_PREFIX = '/api/items'

api.add_resource(NewItem, f'{URL_PREFIX}/')
api.add_resource(GetItems, f'{URL_PREFIX}/')
api.add_resource(DeleteItem, f'{URL_PREFIX}/')
api.add_resource(EditItem, f'{URL_PREFIX}/edit/<int:item_id>')
api.add_resource(GetItem, f'{URL_PREFIX}/<int:item_id>')
api.add_resource(ToggleChecked, f'{URL_PREFIX}/toggle/<int:item_id>')
api.add_resource(GetItemsInGroup, f'{URL_PREFIX}/group/<int:group_id>')
