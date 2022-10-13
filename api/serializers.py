from rest_framework.serializers import ModelSerializer
from .models import Object, Room

class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class ObjectSerializer(ModelSerializer):
    class Meta:
        model = Object
        fields = '__all__'