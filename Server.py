#
# Server.py
#

import time
import zmq
import json

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:5555")

while True:
    #  Wait for next request from client
    message = socket.recv()
    print("Received request: %s" % message)

    #  Do some 'work'
    time.sleep(1)

    # TODO criar logica para diferenciar as ações dependendo da quantidade de piscadas capturadas
    y = json.dumps({
        "Action": "selected"
    })

    msg = y.encode('ascii')
    socket.send(msg)

    #  Send reply back to client
    # socket.send(b"World")