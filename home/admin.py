from django.contrib import admin
from .models import Profile
from import_export.admin import ImportExportModelAdmin
from import_export import resources, fields

# Register your models here.

class ProfileResource(resources.ModelResource):
    studentid = fields.Field(column_name='Id Number')
    fname = fields.Field(column_name='First name')
    lname = fields.Field(column_name='Last name')
    email = fields.Field(column_name='Email')

    def dehydrate_studentid(self, obj):
        return obj.user.username

    def dehydrate_fname(self, obj):
        return obj.user.first_name

    def dehydrate_lname(self, obj):
        return obj.user.last_name

    def dehydrate_email(self, obj):
        return obj.user.email

    class Meta:
        model = Profile
        exclude = ('user', 'id', 'gender', 'created_at','updated_at', 'is_verified')


class ProfileAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = ProfileResource
    list_display = ('user', 'first_name', 'last_name', 'email', 'phone', 'branch', 'year_of_study', 'college_name', 'gender')
    list_filter = ('branch', 'gender', 'year_of_study')
    search_fields = ['user__username', 'user__email', 'user__first_name', 'user__last_name', 'user__profile__phone']
    ordering = ['user__username', 'branch', 'year_of_study', 'college_name', 'gender']
    save_as = True
    save_on_top = True

    def email(self, obj):
        return obj.user.email

    def username(self, obj):
        return obj.user.username

    def first_name(self, obj):
        return obj.user.first_name

    def last_name(self, obj):
        return obj.user.last_name


admin.site.register(Profile, ProfileAdmin)