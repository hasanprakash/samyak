# Generated by Django 4.0.3 on 2022-03-28 01:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0009_auto_20220328_0629'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegisteredEvent',
            fields=[
                ('reg_id', models.AutoField(primary_key=True, serialize=False)),
                ('student_id', models.CharField(default=None, max_length=1000)),
                ('first_name', models.CharField(default=None, max_length=1000)),
                ('last_name', models.CharField(default=None, max_length=1000)),
                ('email', models.EmailField(default=None, max_length=1000)),
                ('phone', models.CharField(default=999999999, max_length=10)),
                ('college_name', models.CharField(default='KL Vijayawada', max_length=30)),
                ('event_name', models.CharField(default=None, max_length=30)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.event')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]