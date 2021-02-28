from shopping_list import api
from .resources import Alert

URL_PREFIX = 'alerts'

api.add_resource(Alert, f'/api/{URL_PREFIX}/')
