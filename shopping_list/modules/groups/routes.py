from shopping_list import api
from .resources import NewGroup, GetAllGroups

URL_PREFIX = '/api/groups'

api.add_resource(NewGroup, f'{URL_PREFIX}/')
api.add_resource(GetAllGroups, f'{URL_PREFIX}/')
