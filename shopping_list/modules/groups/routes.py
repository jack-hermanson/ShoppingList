from shopping_list import api
from .resources import *

URL_PREFIX = '/api/groups'

api.add_resource(NewGroup, f'{URL_PREFIX}/')
api.add_resource(GetGroups, f'{URL_PREFIX}/')
api.add_resource(GetGroupIds, f'{URL_PREFIX}/ids/')
api.add_resource(GetGroup, f'{URL_PREFIX}/<int:group_id>')
api.add_resource(DeleteGroup, f'{URL_PREFIX}/')
api.add_resource(EditGroup, f'{URL_PREFIX}/edit/<int:group_id>')
