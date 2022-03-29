from dataclasses import fields
import profile
from pyexpat import model
from unicodedata import name
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .serializers import UserSerializers, PaymentSerializers, EventSerializers, ProfileSerializers, RegisteredEventSerializers, TeamSerializers
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Profile, Event, Payment, RegisteredEvent, Team
from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from instamojo_wrapper import Instamojo
from django.conf import settings
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordResetForm

from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.contrib.auth.forms import PasswordResetForm
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.contrib import messages

api = Instamojo(api_key=settings.API_KEY, auth_token=settings.AUTH_TOKEN)
# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

def test(request):
    return HttpResponse("<h1>Samyak Project Testing Page</h1>")

def password_reset_request(request):
	if request.method == "POST":
		password_reset_form = PasswordResetForm(request.POST)
		if password_reset_form.is_valid():
			data = password_reset_form.cleaned_data['email']
			associated_users = User.objects.filter(Q(email=data))
			if associated_users.exists():
				for user in associated_users:
					subject = "Password Reset Requested"
					email_template_name = "password_reset_email.txt"
					c = {
					"email":user.email,
					'domain':'klsamyakbackend.in',
					'site_name': 'KL Samyak',
					"uid": urlsafe_base64_encode(force_bytes(user.pk)),
					"user": user,
					'token': default_token_generator.make_token(user),
					'protocol': 'https',
					}
					email = render_to_string(email_template_name, c)
					try:
						send_mail(subject, email, 'klsamyak2022@gmail.com' , [user.email], fail_silently=False)
					except BadHeaderError:
						return HttpResponse('Invalid header found.')
					return redirect ("/password_reset/done/")
	password_reset_form = PasswordResetForm()
	return render(request=request, template_name="password_reset.html", context={"password_reset_form":password_reset_form})
    
@login_required(login_url='/admin')
def admin_dashboard(request):
    if not request.user.is_superuser:
        return redirect('/')
    user_count = User.objects.filter().count
    payment_count = Payment.objects.filter(payment_status=True).count()
    total_amount = payment_count * 210.62
    CSE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="CSE").count()
    BT = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BT").count()
    ME = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="ME").count()
    EEE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="EEE").count()
    CE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="CE").count()
    ECM = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",  
                                       user__profile__branch="ECM").count()
    ECE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="ECE").count()
    AIDS = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="AI&DS").count()
    CSIT = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="CS&IT").count()
    
    BBA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BBA").count()

    MBA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="MBA").count()

    LLB = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="LLB").count()

    BCom = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="B.COM").count()

    MCom = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="M.COM").count()

    BFA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BFA").count()

    Arch = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="ARCHITECTURE").count()

    FED = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="FED").count()

    MCA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="MCA").count()

    BCA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BCA").count()

    BSCVC = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="B.SC.VC").count()

    BPharam = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="B.PHARM").count()

    MPharam = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="M.PHARM").count()
    
    Agri = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="AGRICULTURE").count()
    
    BHM = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BHM").count()
    
    BAIAS = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BA-IAS").count()

    context = {'user_count': user_count, 'payment_count': payment_count, 'total_amount': total_amount,
        'CSE': CSE, 'BT': BT, 'ME': ME, 'EEE' : EEE, 'CE' : CE, 'ECM': ECM, 'ECE': ECE, 'AIDS': AIDS, 'CSIT': CSIT,
        'BBA': BBA, 'MBA': MBA, 'LLB': LLB, 'BCom': BCom, 'MCom': MCom, 'BFA': BFA, 'BCA': BCA, 'Arch': Arch, 'FED': FED,
        'MCA': MCA, 'BCA': BCA, 'BSCVC': BSCVC, 'BPharam': BPharam, 'MPharam': MPharam, 'Agri': Agri, 'BHM': BHM, 'BAIAS': BAIAS}
    return render(request, 'admin_dashboard.html', context)


class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializers
    queryset = User.objects.all()   
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        return Response({'status': 'NOPEE!'})

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


class RegisterEventViewSet(viewsets.ModelViewSet):
    serializer_class = RegisteredEventSerializers
    queryset = RegisteredEvent.objects.all()
    permission_classes = [IsAuthenticated]
    def list(self, request):
        user_id = request.user.id
        givenuser_id = request.query_params.get('user_id')
        print(user_id, givenuser_id)
        if str(user_id) == str(givenuser_id):
            return Response(RegisteredEventSerializers(RegisteredEvent.objects.filter(user=User.objects.get(id=user_id)), many=True).data)
        else:
            return Response({'status': False, 'message': 'Not Authorized'})
    def create(self, request, pk=None):
        print(request.data)
        displayData = request.data
        user_id = request.user.id
        event_name = displayData['event_name']
        userobj = User.objects.get(id=user_id)
        first_name = userobj.first_name
        last_name = userobj.last_name
        email = userobj.email
        phone = Profile.objects.get(user=userobj).phone
        college_name = Profile.objects.get(user=userobj).college_name
        reg_id = userobj.username
        eventobj = Event.objects.get(name=event_name)
        print("IN CREATE")
        if RegisteredEvent.objects.filter(event=eventobj, user=userobj).exists():
            return Response({"status": False, "message": "Already Registered.!"})
        else:
            RegisteredEvent.objects.create(user=userobj, event=eventobj, first_name=first_name, last_name=last_name, email=email, phone=phone, college_name=college_name, event_name=event_name, student_id=reg_id)
            return Response({'status': True, 'message': 'New Event Registered'})

class TeamViewSet(viewsets.ModelViewSet):
    serializer_class = TeamSerializers
    queryset = Team.objects.all()
    permission_classes = [IsAuthenticated, IsAdminUser]

class EventsViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializers
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]


class PaymentTempSerializers(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
class ProfileTempSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['phone','branch','year_of_study','gender','college_name']
class UserTempSerializer(serializers.ModelSerializer):
    profile = ProfileTempSerializers()
    payment = PaymentTempSerializers()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile', 'payment']
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
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializers

    def get(self, request):
        print("SUCCESS METHOD")
        print(request)
        Response({"status": 'UNAUTHORIZED'})

    def post(self, request):
        print(request.data)
        print("CONFIGURING PAYMENTS")
        username = request.data['username']
        email = request.data['email']
        phone = request.data['phone']
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
                amount=200,
                purpose='Samyak Registration Fee',
                buyer_name=username,
                email=email,
                phone=phone,
                redirect_url='https://klsamyakbackend.in/home/paymentsuccess'
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
        # print(payment_request_id, payment_id)
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
            return HttpResponseRedirect("http://klsamyak.in/profile")
        else:
            return Response({"status" : 'FAILED'})
    
    def post(self, request):
        print("IN POST ReQUUEST")
        return Response({'status': 'post request'})



class EventsViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializers
    queryset = Event.objects.all()   
    permission_classes = [permissions.AllowAny]
    # def create(self, request, pk=None):
    #     # allEvents = Event.objects.all()
    #     print(request)
    #     return Response({'data': 'hi'})