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




