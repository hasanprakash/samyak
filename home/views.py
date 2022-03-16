from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import serializers, viewsets
from rest_framework import permissions
from .serializers import UserSerializers
from django.contrib.auth.models import User, Group

# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.IsAdminUser]
