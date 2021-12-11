from django.urls import path
from .views import joblist,scrap, signup, login

urlpatterns = [
    path('jobs/', joblist),
    path('sc/', scrap),
    path('signup/', signup),
    path('login/', login),
]