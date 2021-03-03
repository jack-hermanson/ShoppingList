from shopping_list import api
from .resources import NewGroup, GetGroups, GetGroup

URL_PREFIX = '/api/groups'

api.add_resource(NewGroup, f'{URL_PREFIX}/')
api.add_resource(GetGroups, f'{URL_PREFIX}/')
api.add_resource(GetGroup, f'{URL_PREFIX}/<int:group_id>')
