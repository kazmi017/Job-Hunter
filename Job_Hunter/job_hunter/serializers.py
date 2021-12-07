from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from .models import CV,Job,User

class Jobser(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields='__all__'
