from shopping_list import api
from .resources import Test


api.add_resource(Test, '/api/test')
