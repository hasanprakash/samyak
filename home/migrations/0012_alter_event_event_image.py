# Generated by Django 4.0.3 on 2022-03-28 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0011_delete_eventregister'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_image',
            field=models.CharField(default=None, max_length=200),
        ),
    ]
