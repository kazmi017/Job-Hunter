from django.urls import path
from .views import joblist

urlpatterns = [
    path('jobs/', joblist),
]