from django.db.models import fields
from rest_framework import serializers
from .models import Article

class ArticleSer(serializers.ModelSerializer):
    class Meta:
        model=Article
        fields=['id','title','description']