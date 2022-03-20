from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10, default=999999999)
    college_name = models.CharField(max_length=30)
    branch = models.CharField(max_length=20)
    year_of_study = models.TextField(max_length=15, default=1)
    gender = models.CharField( max_length=6)

    def __str__(self):
        return self.user.username


class Event(models.Model):
    event_type = models.CharField(max_length=20)
    name = models.CharField(default=None, primary_key=True, max_length=30)
    description = models.TextField(default=None, max_length=1500)
    guidelines = models.TextField(default=None, max_length=1500)
    no_of_rounds = models.IntegerField(default=1)
    round_1_details = models.TextField(default=None, max_length=300)
    round_2_details = models.TextField(default=None, max_length=300)
    round_3_details = models.TextField(default=None, max_length=300)
    team_size = models.IntegerField(default=1)
    mode_of_conduct = models.CharField(max_length=20)
    event_core = models.CharField(max_length=50, default=None)
    event_core_phone = models.CharField(max_length=10, default=999999999)
    event_coordinator = models.CharField(max_length=50, default=None)
    event_coordinator_phone = models.CharField(max_length=10, default=999999999)
    cash_prize_1 = models.IntegerField(default=500)
    cash_prize_2 = models.IntegerField(default=500)
    cash_prize_3 = models.IntegerField(default=500)
    date = models.DateTimeField()
    venue = models.CharField(default='CSE Block', max_length=30)
    event_image = models.ImageField(upload_to='events/', blank=True)


class Payment(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    receipt_id = models.CharField(max_length=100)
    mojo_id = models.CharField(max_length=100)
    transaction_amount = models.IntegerField(default=400)
    payment_status = models.BooleanField(default=False)
    payment_time = models.DateTimeField(auto_now=True, blank=True)