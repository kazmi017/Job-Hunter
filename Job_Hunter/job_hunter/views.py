from django.shortcuts import render
#from .Scrapper.scrapping import data as d
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Job,CV,User
from .serializers import CVser, Jobser,USERser,Loginser
from .Scrapper.sc import scrape_jobs
from rest_framework.response import Response
from rest_framework import serializers, status
from django.views.decorators.csrf import csrf_exempt
# HAVE TO ADD COMPANY NAME<<<ASK N>>>

def scrap(request):
    if request.method == 'GET':
        positions=CV.objects.values('Skills').distinct()
        for position in positions:
            skills=(str(position['Skills']).lower().split(", "))
            for skill in skills:
                scrape_jobs(skill.replace(" ","+"), "islamabad")
        job= CV.objects.all()
        serializer = CVser(job, many=True)
        return JsonResponse(serializer.data, safe=False)

def joblist(request):
    if request.method == 'GET':
        job= Job.objects.all()
        serializer = Jobser(job, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        serializer = USERser(data=data)
        print(data['Email'])
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(data['Email'],safe=False)
        else:
            print(serializer.errors)
            return JsonResponse("Failed to Add User",safe=False)
    else:
        d=User.objects.all()
        serial=USERser(d,many=True)
        return JsonResponse(serial.data,safe=False)



@csrf_exempt
def login(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        # serializer = Loginser(data=data)
        pasw=data['Password']
        usern=data['Username']
        q= User.objects.filter(Username=usern)
        # print(passw)
        serializer=Loginser(q,many=True)
        # stra=map(str,serializer.data)
        pas=serializer.data[0]['Password']

        if pasw==pas:
            return JsonResponse(serializer.data[0]['Email'],safe=False)
        else:
            return JsonResponse("Authentication Failed",safe=False)


