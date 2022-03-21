from dataclasses import fields
from pyexpat import model
from django.http import HttpResponse
from django.shortcuts import render
from .serializers import UserSerializers
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Profile
from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    #permission_classes = [permissions.AllowAny]

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
            u = User.objects.create_user(username=displayData['username'], first_name=displayData['first_name'], last_name=displayData['last_name'], email=displayData['email'], password=displayData['password'])
            Profile.objects.create(user=u, phone=displayData['phoneno'], college_name=displayData['college'], branch=displayData['branch']
            , year_of_study=displayData['year'], gender=displayData['gender'])
            return Response({"status": True, "message": "POST, World!"})




class UserTempSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'profile')
class UserAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserTempSerializer
    def get_object(self):
        return self.request.user


class ProfileView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializers
    def get_queryset(self):
        print("Sending all User Details")
        return User.objects.all()