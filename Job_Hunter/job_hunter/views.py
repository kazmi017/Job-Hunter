from django.db.models.fields import NullBooleanField
from django.shortcuts import render
#from .Scrapper.scrapping import data as d
from django.http import HttpResponse, JsonResponse
from django.utils.functional import empty
from rest_framework.parsers import JSONParser
from .models import Job,CV,User
from .serializers import CVser, Jobser,USERser,Loginser, CVserl,Statser
from .Scrapper.sc import scrape_jobs
from rest_framework.response import Response
from rest_framework import serializers, status
from django.views.decorators.csrf import csrf_exempt
import json
# HAVE TO ADD COMPANY NAME<<<ASK N>>>

def scrap(request):
        positions=CV.objects.values('Skills').distinct()
        for position in positions:
            skills=(str(position['Skills']).split(", "))
            for skill in skills:
                scrape_jobs(skill.replace(" ","+").lower(), "islamabad",skill)
        job= Job.objects.all()
        serializer = Jobser(job, many=True)
        return JsonResponse("True", safe=False)

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
        # print(data['Email'])
        if serializer.is_valid():
            serializer.save()
            d={"Email":data['Email']}
            return JsonResponse(d,safe=False)
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
            data={"Email":serializer.data[0]['Email']}
            return JsonResponse(data,safe=False)
        else:
            return JsonResponse("Authentication Failed",safe=False)

@csrf_exempt
def jobforu(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        skill=data["Skill"]
        print(skill)
        j=Job.objects.filter(Skills__contains=skill)
        # __contains
        serializer=Jobser(j,many=True)
        if j:
            return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def joblists(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        skill=data["Skill"]
        print(skill)
        j=Job.objects.filter(Skills__contains=skill)
        # __contains
        serializer=Jobser(j,many=True)

        return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def joblistP(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        skill=data["Province"]
        j=Job.objects.filter(Province__contains=skill)
        # __contains
        serializer=Jobser(j,many=True)

        return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def joblistT(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        skill=data["Title"]
        j=Job.objects.filter(JobTitle__contains=skill)
        # __contains
        serializer=Jobser(j,many=True)

        return JsonResponse(serializer.data,safe=False)


@csrf_exempt
def jobs(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        em=data['Email']
        q= CV.objects.filter(Email=em).first()
        serializer = CVser(q)
        print(serializer.data['Skills'].split(", "))
        skills=serializer.data['Skills'].split(", ")

        return JsonResponse(skills,safe=False)

@csrf_exempt
def saveCV(request):
    if request.method == 'POST' :
        data=JSONParser().parse(request)
        skill=data["Skill"]
        save=CVserl(data=data)
        if save.is_valid():
            save.save()
            
            return JsonResponse(data['Name'], safe=False)

@csrf_exempt
def cvupdate(request):
    if request.method == 'POST' :
        data=JSONParser().parse(request)
        instance=CV.objects.get(Email=data['Email'])
        cv=CVserl(instance,data=data)
        print(instance)
        if cv.is_valid():
            cv.update(instance,cv.validated_data)
            return JsonResponse("CV has beed updated", safe=False)
        else:
            return JsonResponse(cv.errors,safe=False)


@csrf_exempt
def cvstat(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        instance=User.objects.get(Email=data['Email'])
        serializer = Statser(instance,data=data)
        if serializer.is_valid():
            serializer.update(instance,serializer.validated_data)
            return JsonResponse(serializer.data['isCvCreated'], safe=False)

@csrf_exempt
def uppass(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        instance=User.objects.get(Email=data['Email'])
        serializer = Statser(instance,data=data)
        if serializer.is_valid():
            serializer.update(instance,serializer.validated_data)
            return JsonResponse(serializer.data['Name'], safe=False)



@csrf_exempt
def cvstatCH(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        em=data['Email']
        q= User.objects.filter(Email=em).first()
        serializer = USERser(q)
        return JsonResponse(serializer.data['isCvCreated'],safe=False)

@csrf_exempt
def cvdets(request):
    if request.method == 'POST' :
        data=JSONParser().parse(request)
        cv=CV.objects.get(Email=data['Email'])
        ser=CVserl(cv)
        return JsonResponse(ser.data, safe=False)

