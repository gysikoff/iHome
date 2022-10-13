from django.contrib import admin

# Register your models here.

from .models import Room, Object

admin.site.register(Room)
admin.site.register(Object)