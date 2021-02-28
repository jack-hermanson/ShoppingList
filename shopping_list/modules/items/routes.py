from shopping_list import api
from .resources import Index

URL_PREFIX = 'items'

api.add_resource(Index, f'/api/{URL_PREFIX}/')
