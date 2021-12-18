from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from .models import CV,Job,User

class Jobser(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields='__all__'

class CVser(serializers.ModelSerializer):
    class Meta:
        model=CV
        fields='__all__'

class CVserl(serializers.ModelSerializer):
    class Meta:
        model=CV
        fields='__all__'

class USERser(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

class Statser(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['isCvCreated']

class Loginser(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'