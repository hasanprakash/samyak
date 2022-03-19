# Generated by Django 4.0.3 on 2022-03-19 06:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(default=999999999, max_length=10)),
                ('college_name', models.CharField(default='KL Vijayawada', max_length=30)),
                ('branch', models.CharField(choices=[('CSE', 'CSE'), ('ECE', 'ECE'), ('ECM', 'ECM'), ('BBA', 'BBA'), ('EEE', 'EEE'), ('BCA', 'BCA'), ('LAW', 'LAW'), ('MBA', 'MBA'), ('MECH', 'MECH'), ('CIVIL', 'CIVIL'), ('CSIT', 'CSIT'), ('BT', 'BT'), ('AI&DS', 'AI&DS'), ('HOTEL MANG.', 'HOTEL MANG.'), ('FINE ARTS', 'FINE ARTS'), ('ARCH.T', 'ARCH.T'), ('OTHER', 'OTHER')], default='CSE', max_length=20)),
                ('year_of_study', models.TextField(choices=[('Select Year', 'Select Year'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('Faculty', 'Faculty'), ('Alumni', 'Alumni'), ('Other', 'Other')], default=1, max_length=15)),
                ('gender', models.CharField(choices=[('MALE', 'MALE'), ('FEMALE', 'FEMALE')], default='MALE', max_length=6)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]