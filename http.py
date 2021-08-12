from klein import run, route
from twisted.internet.defer import succeed
import json
import requests
import logging

@route('/teste', methods=['POST'])
def noi_integration(request):
    #content = json.loads(request.content.read())
    content = request.content.read()    
    #header = request.header.read()

    print(content)
    #print(header)
    response = '{"data":"' + content + '"}'
    return response

#@route('/oauth/token')
@route('/teste', methods=['GET'])
def noi_integration2(request):

    response = '{"hello": "world"}'
    return response

run("localhost",3003)
