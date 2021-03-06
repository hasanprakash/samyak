from django import views
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('admin_dashboard', views.admin_dashboard, name='admin_dashboard'),
    path('test', views.test, name='test'),
    path("users", views.ProfileView.as_view(), name="profile"),
    path("payment", views.PaymentView.as_view(), name="payment"),
    path("password_reset", views.password_reset_request, name="password_reset"),
    path("paymentsuccess", views.PaymentSuccessView.as_view(), name="paymentsuccess"),
    path("updateprofile", views.ProfileUpdateView.as_view(), name="profileupdate"),
]