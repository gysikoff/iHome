from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Object, Room
from .serializers import RoomSerializer, ObjectSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/rooms/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of rooms'
        },
        {
            'Endpoint': '/rooms/add/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new room with data from post req'
        },
        {
            'Endpoint': '/rooms/id/update',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Updates a room'
        },
        {
            'Endpoint': '/rooms/id/objects',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of objects in room'
        },
        {
            'Endpoint': '/rooms/id/objects/add',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new object inside the room'
        },
        {
            'Endpoint': '/rooms/id/objects/id/update',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Updates an object inside the room'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getRooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRoom(request, pk):
    room = Room.objects.get(roomID = pk)
    serializer = RoomSerializer(room, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getObjects(request, roomPk):
    objects = Object.objects.filter(roomFK = roomPk)
    serializer = ObjectSerializer(objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getObject(request, roomPk, objectPk):
    object = Object.objects.get(roomFK= roomPk, objectID = objectPk)
    serializer = ObjectSerializer(object, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateRoom(request, roomPk):
    data = request.data
    room = Room.objects.get(roomID = roomPk)
    serializer = RoomSerializer(instance = room, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['PUT'])
def updateObject(request, roomPk, objectPk):
    data = request.data
    object = Object.objects.get(objectID = objectPk, roomFK = roomPk)
    serializer = ObjectSerializer(instance = object, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def createRoom(request):
    data = request.data
    room = Room.objects.create(
        name=data['name'],
        description=data['description']
    )
    serializer = RoomSerializer(room, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteRoom(request, roomPk):
    room = Room.objects.get(roomID = roomPk)
    room.delete()
    return Response()

@api_view(['POST'])
def createObject(request, roomPk):
    data = request.data
    object = Object.objects.create(
        name=data['name'],
        description=data['description'],
        roomFK=Room.objects.get(roomID=roomPk)
    )
    serializer = ObjectSerializer(object, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteObject(request, objectPk, roomPk):
    object=Object.objects.get(objectID = objectPk)
    object.delete()
    return Response()