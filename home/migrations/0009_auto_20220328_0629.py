# Generated by Django 3.2.9 on 2022-03-28 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_team_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.TextField(default=None, max_length=2000),
        ),
        migrations.AlterField(
            model_name='event',
            name='guidelines',
            field=models.TextField(default=None, max_length=2000),
        ),
        migrations.AlterField(
            model_name='event',
            name='round_1_details',
            field=models.TextField(default=None, max_length=2000),
        ),
        migrations.AlterField(
            model_name='event',
            name='round_2_details',
            field=models.TextField(default=None, max_length=2000),
        ),
        migrations.AlterField(
            model_name='event',
            name='round_3_details',
            field=models.TextField(default=None, max_length=2000),
        ),
    ]
