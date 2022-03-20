from django.http import HttpResponse
from django.shortcuts import render
from .serializers import UserSerializers
from django.contrib.auth.models import User, Group
from django.shortcuts import get_object_or_404
from .models import Profile
from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    #permission_classes = [permissions.AllowAny]

    def list(self, request, pk=None):
        print(request.query_params)
        print("IN LIST")
        username = request.query_params.get('username')
        password = request.query_params.get('password')
        user_status = User.objects.filter(username=username).exists()
        if(user_status):
            user = User.objects.get(username=username)
            if user.check_password(password):
                return Response({"status": True, "message": "GET, World!"})
            else:
                return Response({"status": False, "message": "Wrong Password.!"})
        else:
            return Response({"status": False, "message": "User doesn't exist.!"})

    def create(self, request, pk=None):
        print(request.data)
        displayData = request.data
        print("IN CREATE")
        if User.objects.filter(username=displayData['username']).exists():
            return Response({"status": False, "message": "Username Already Exists.!"})
        elif User.objects.filter(email=displayData['email']).exists():
            return Response({"status": False, "message": "Email Already Exists.!"})
        elif Profile.objects.filter(phone=displayData['phoneno']).exists():
            return Response({"status": False, "message": "Phone Number Already Exists.!"})
        else:
            u = User.objects.create_user(username=displayData['username'], email=displayData['email'], password=displayData['password'])
            Profile.objects.create(user=u, phone=displayData['phoneno'], college_name=displayData['college'], branch=displayData['branch']
            , year_of_study=displayData['year'], gender=displayData['gender'])
            return Response({"status": True, "message": "POST, World!"})

