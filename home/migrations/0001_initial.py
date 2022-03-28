from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('event_cat', models.CharField(max_length=100)),
                ('event_type', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('name', models.CharField(default=None, max_length=100, primary_key=True, serialize=False)),
                ('description', models.TextField(default=None, max_length=2000)),
                ('guidelines', models.TextField(default=None, max_length=2000, null=True)),
                ('no_of_rounds', models.IntegerField(default=1, null=True)),
                ('round_1_details', models.TextField(default=None, max_length=2000, null=True)),
                ('round_2_details', models.TextField(default=None, max_length=2000, null=True)),
                ('round_3_details', models.TextField(default=None, max_length=2000, null=True)),
                ('team_size', models.IntegerField(default=1, null=True)),
                ('mode_of_conduct', models.CharField(max_length=20, null=True)),
                ('event_core', models.CharField(default=None, max_length=50, null=True)),
                ('event_core_phone', models.CharField(default=999999999, max_length=10, null=True)),
                ('event_coordinator', models.CharField(default=None, max_length=50, null=True)),
                ('event_coordinator_phone', models.CharField(default=999999999, max_length=10, null=True)),
                ('cash_prize_1', models.IntegerField(default=500, null=True)),
                ('cash_prize_2', models.IntegerField(default=500, null=True)),
                ('cash_prize_3', models.IntegerField(default=500, null=True)),
                ('date', models.DateTimeField(null=True)),
                ('venue', models.CharField(default='CSE Block', max_length=30, null=True)),
                ('event_image', models.CharField(max_length=300, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('receipt_id', models.CharField(max_length=100)),
                ('mojo_id', models.CharField(max_length=100)),
                ('transaction_amount', models.IntegerField(default=400)),
                ('payment_status', models.BooleanField(default=False)),
                ('payment_time', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigIntegerField(default=0, primary_key=True, serialize=False)),
                ('fullname', models.CharField(default=None, max_length=100)),
                ('department', models.CharField(default='CSE', max_length=50)),
                ('wing', models.CharField(default=None, max_length=1000)),
                ('designation', models.CharField(default=None, max_length=1000)),
                ('gmail', models.CharField(default=None, max_length=1000)),
                ('instagram', models.CharField(default=None, max_length=1000)),
                ('twitter', models.CharField(default=None, max_length=1000)),
                ('facebook', models.CharField(default=None, max_length=1000)),
                ('linkedin', models.CharField(default=None, max_length=1000)),
                ('team_image', models.ImageField(upload_to='team_data/')),
                ('is_paid', models.BooleanField(default=False)),
            ],
        ),
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
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(default=999999999, max_length=10)),
                ('college_name', models.CharField(max_length=30)),
                ('branch', models.CharField(max_length=20)),
                ('year_of_study', models.TextField(default=1, max_length=15)),
                ('gender', models.CharField(max_length=6)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
