from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    
    path('rooms/<str:roomPk>/update', views.updateRoom, name="update-room"),
    path('rooms/<str:roomPk>/delete/', views.deleteRoom, name="delete-room"),
    path('rooms/<str:roomPk>/objects/<str:objectPk>/update/', views.updateObject, name="update-object"),
    path('rooms/create/', views.createRoom, name="room-create"),
    path('rooms/<str:roomPk>/object/create/', views.createObject, name="create-object"),
    path('rooms/<str:roomPk>/objects/<str:objectPk>/delete/', views.deleteObject, name="delete-object"),

    path('rooms/', views.getRooms, name="rooms"),
    path('rooms/<str:pk>/', views.getRoom, name="room"),
    path('rooms/<str:roomPk>/objects/', views.getObjects, name="objects"),
    path('rooms/<str:roomPk>/objects/<str:objectPk>', views.getObject, name="object"),
]