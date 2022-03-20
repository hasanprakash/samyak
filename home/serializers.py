from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Profile, Event, Payment

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

class UserSerializers(serializers.ModelSerializer):
    profile = ProfileSerializers()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile']

class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class PaymentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'