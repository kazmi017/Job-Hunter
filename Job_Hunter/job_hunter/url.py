from django.urls import path
from .views import joblist,scrap, signup, login,jobforu,jobs,joblists,saveCV,cvstat,cvupdate,cvdets,cvstatCH,joblistP,joblistT,uppass,chUsername,chPhone
from .views import chPass,forget
urlpatterns = [
    path('sc/', scrap),
    path('signup/', signup),
    path('login/', login),
    path('forget/', forget),
    path('job/', jobforu),
    path('skill/', jobs),
    path('jobprov/', joblistP),
    path('jobt/', joblistT),
    path('cv/', saveCV),
    path('cvupdate/', cvupdate),
    path('cvstat/', cvstat),
    path('cvdet/', cvdets),
    path('cvstatcheck/', cvstatCH),
    path('upusername/', chUsername),
    path('upphone/', chPhone),
    path('uppass/', chPass),
    path('show/', joblist),


]