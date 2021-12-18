from django.urls import path
from .views import joblist,scrap, signup, login,jobforu,jobs,joblists,saveCV,cvstat,cvupdate,cvdets,cvstatCH,joblistP,joblistT,uppass

urlpatterns = [
    path('jobs/', joblist),
    path('sc/', scrap),
    path('signup/', signup),
    path('login/', login),
    path('uppass/', uppass),
    path('job/', jobforu),
    path('skill/', jobs),
    path('jobprov/', joblistP),
    path('jobt/', joblistT),
    path('joblist/', joblist),
    path('cv/', saveCV),
    path('cvupdate/', cvupdate),
    path('cvstat/', cvstat),
    path('cvdet/', cvdets),
    path('cvstatcheck/', cvstatCH),
]