from shopping_list import api
from .resources import Index

URL_PREFIX = '/api/items'

api.add_resource(Index, f'{URL_PREFIX}/')
