from django.shortcuts import render, HttpResponse
from rest_framework import serializers

from fyp.models import Article
from .serializers import ArticleSer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def ar_li(request):
    if request.method=='GET':
        arts=Article.objects.all()
        serializer=ArticleSer(arts, many=True)
        return Response(serializer.data)

    elif request.method=='POST':
        serializer=ArticleSer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def art_dets(request,pk):
    try:
        art=Article.objects.get(pk=pk)

    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        ser=ArticleSer(art)
        return Response(ser.data)
    elif request.method=='PUT':
        data=JSONParser().parse(request)
        serializer=ArticleSer(art,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.body)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':
        art.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
