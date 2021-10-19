from django.urls import path
from .views import ar_li,art_dets
urlpatterns = [
    path('articles/', ar_li),
    path('articles/<int:pk>',art_dets),
]
