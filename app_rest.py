from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import time

app = Flask(__name__)
api = Api(app)
CORS(app)


class ap1 (Resource):
    def get(self):
            time.sleep(1) # Sleep for 1 seconds
            return {'data': 'Ap1'}


class ap2(Resource):
    def get(self):
        time.sleep(1) # Sleep for 1 seconds
        return {'data': 'Ap2'}

class ap3(Resource):
    def get(self):
        time.sleep(1) # Sleep for 1 seconds
        return {'data': 'Ap2'}


api.add_resource(ap1, '/ap1')
api.add_resource(ap2, '/ap2')
api.add_resource(ap3, '/ap3')

if __name__ == '__main__':
    app.run()