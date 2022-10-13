from pydoc import describe
from django.db import models

# Create your models here.

# Room model (roomID[PK], name[TEXT], description[TEXT])
class Room(models.Model):
    roomID = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(null=False, blank=False, max_length=30)
    description = models.CharField(null=True, blank=True, max_length=100)

    def __str__(self):
        return self.name


# Object model for objects inside the room
class Object(models.Model):
    objectID = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(null=False, blank=False, max_length=30)
    description = models.CharField(null=True, blank=True, max_length=100)
    roomFK = models.ForeignKey(Room, on_delete=models.CASCADE)
    state = models.BooleanField(default=False)

    def __str__(self):
        return self.name

