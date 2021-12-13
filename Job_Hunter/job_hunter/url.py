from django.urls import path
from .views import joblist,scrap, signup, login,jobforu,jobs

urlpatterns = [
    path('jobs/', joblist),
    path('sc/', scrap),
    path('signup/', signup),
    path('login/', login),
    path('job/', jobforu),
    path('skill/', jobs),
]