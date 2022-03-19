from django.http import HttpResponse
from django.shortcuts import render
from .serializers import UserSerializers
from django.contrib.auth.models import User, Group

from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

class UsersView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    #permission_classes = [permissions.AllowAny]

