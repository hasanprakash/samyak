from django.db import models
from django.contrib.auth.models import User

# Create your models here.

GENDER = (
    ("MALE", 'MALE'),
    ("FEMALE", 'FEMALE')
)

YEAR = (
    ("Select Year", "Select Year"),
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("5", "5"),
    ("Faculty", "Faculty"),
    ("Alumni", "Alumni"),
    ("Other", "Other")
)

BRANCH = (
    ("CSE", 'CSE'),
    ("ECE", 'ECE'),
    ("ECM", 'ECM'),
    ("BBA", 'BBA'),
    ("EEE", 'EEE'),
    ("BCA", 'BCA'),
    ("LAW", 'LAW'),
    ("MBA", 'MBA'),
    ("MECH", 'MECH'),
    ("CIVIL", 'CIVIL'),
    ("CSIT", 'CSIT'),
    ("BT", 'BT'),
    ("AI&DS", 'AI&DS'),
    ("HOTEL MANG.", 'HOTEL MANG.'),
    ("FINE ARTS", 'FINE ARTS'),
    ("ARCH.T", 'ARCH.T'),
    ("OTHER", 'OTHER')
)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10, default=999999999)
    college_name = models.CharField(max_length=30, default='KL Vijayawada')
    branch = models.CharField(choices=BRANCH, default='CSE', max_length=20)
    year_of_study = models.TextField(choices=YEAR, max_length=15, default=1)
    gender = models.CharField(choices=GENDER, default='MALE', max_length=6)