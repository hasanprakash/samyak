from dataclasses import fields
import profile
from pyexpat import model
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .serializers import UserSerializers, PaymentSerializers, EventSerializers, ProfileSerializers
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Profile, Event, Payment
from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from instamojo_wrapper import Instamojo
from django.conf import settings
from rest_framework.views import APIView

api = Instamojo(api_key=settings.API_KEY, auth_token=settings.AUTH_TOKEN, endpoint='https://test.instamojo.com/api/1.1/')
# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializers
    queryset = User.objects.all()   
    permission_classes = [permissions.AllowAny]

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


class PaymentsViewSet(viewsets.ModelViewSet):  
    serializer_class = PaymentSerializers
    queryset = Payment.objects.all()


class EventsViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializers
    queryset = Event.objects.all()


class ProfileTempSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['phone']
class UserTempSerializer(serializers.ModelSerializer):
    profile = ProfileTempSerializers()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile']
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

class PaymentView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PaymentSerializers

    def get(self, request):
        print("SUCCESS METHOD")
        print(request)

    def post(self, request):
        print(request.data)
        print("CONFIGURING PAYMENTS")
        username = request.data['username']
        email = request.data['email']
        user = User.objects.get(username=username)
        print(user)
        #phone = request.data.phone
        payment_obj, _ = Payment.objects.get_or_create(
            user=user,
            payment_status=False
        )
        # #uname = request.user
        try:
            response = api.payment_request_create(
                amount=300,
                purpose='Samyak Registration Fee',
                buyer_name=username,
                email=email,
                phone=8885384444,
                redirect_url='http://localhost:8000/home/paymentsuccess'
            )
            print(response)
            payment_obj.receipt_id = response['payment_request']['id']
            payment_obj.transaction_amount = int(float(response['payment_request']['amount']))
            payment_obj.save()
            print(response['payment_request']['longurl'])
            return Response(response['payment_request']['longurl'])

        except Exception as e:
            print("ERROR RESPOONSE")
            return Response({"status": False})

    
class PaymentSuccessView(APIView):
    def get(self, request):
        print()
        payment_request_id = request.GET.get('payment_request_id')
        payment_id = request.GET.get('payment_id')
        response = api.payment_request_payment_status(
            id=payment_request_id,
            payment_id=payment_id,
        )
        print(response)
        username = response['payment_request']['buyer_name']   # username
        stats = response['payment_request']['payment']['status']
        print(stats)
        if stats != "Failed":
            payment_obj = Payment.objects.get(receipt_id=payment_request_id)
            payment_obj.payment_status = True
            payment_obj.mojo_id = response['payment_request']['payment']['payment_id']
            payment_obj.save()
            p = Profile.objects.get(user=User.objects.get(username=username))
            p.is_paid = True
            p.save()
            # return Response({"status" : True})
            return HttpResponseRedirect("http://localhost:3000/")
        else:
            return Response({"status" : 'FAILED'})
    
    def post(self, request):
        print("IN POST ReQUUEST")
        return Response({'status': 'post request'})
