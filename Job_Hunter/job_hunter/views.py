from django.shortcuts import render
#from .Scrapper.scrapping import data as d
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Job,CV,User
from .serializers import CVser, Jobser,USERser,Loginser, CVserl,Statser,UNser,Phser,Pswser
from .Scrapper.sc import scrape_jobs
from rest_framework.response import Response
from rest_framework import serializers, status
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
import json
# HAVE TO ADD COMPANY NAME<<<ASK N>>>

def scrap(request):
    sk=tuple()
    sk+=("Plumber","Android",)
    for sks in sk:
        scrape_jobs(sks.lower(), "Pakistan",sks)
    positions=CV.objects.values('Skills')
    for position in positions:
        skills=(str(position['Skills']).split(", "))
        for skill in skills:
            if skill not in sk:
                sk+=(skill,)
                scrape_jobs(skill.replace(" ","+").lower(), "Pakistan",skill)
    return JsonResponse(sk, safe=False)
@csrf_exempt
def joblist(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        # title=data["Title"]
        # city=
        j=Job.objects.filter( City__contains=data["City"]).filter(JobTitle__contains=data["Title"])
        serializer=Jobser(j,many=True)
        return JsonResponse(serializer.data,safe=False)

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
        pasw=data['Password']
        em=data['Email']
        q= User.objects.filter(Email=em).first()
        serializer=Loginser(q)
        pas=serializer.data['Password']

        if pasw==pas:
            data={"Username":serializer.data['Username']}
            return JsonResponse(data,safe=False)
        else:
            return JsonResponse("Authentication Failed",safe=False)



@csrf_exempt
def chUsername(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        pasw=data['Password']
        em=data['Email']
        q= User.objects.filter(Email=em).first()
        serializer=Loginser(q)
        pas=serializer.data['Password']

        if pasw==pas:
            instance=User.objects.get(Email=data['Email'])
            serial = UNser(instance,data=data)
            if serial.is_valid():
                serial.update(instance,serial.validated_data)
                return JsonResponse("Changed", safe=False)


@csrf_exempt
def chPhone(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        pasw=data['Password']
        em=data['Email']
        q= User.objects.filter(Email=em).first()
        serializer=Loginser(q)
        pas=serializer.data['Password']

        if pasw==pas:
            instance=User.objects.get(Email=data['Email'])
            serial = Phser(instance,data=data)
            if serial.is_valid():
                serial.update(instance,serial.validated_data)
                return JsonResponse("Changed", safe=False)


@csrf_exempt
def chPass(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        pasw=data['Password']
        em=data['Email']
        password={"Password":data['New Password']}
        q= User.objects.filter(Email=em).first()
        serializer=Loginser(q)
        pas=serializer.data['Password']
        if pasw==pas:
            instance=User.objects.get(Email=data['Email'])
            serial = Pswser(instance,data=password)
            if serial.is_valid():
                serial.update(instance,serial.validated_data)
                return JsonResponse("Changed", safe=False)
            else:
                return JsonResponse(serial.errors, safe=False)



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
        elif j == None:
            return JsonResponse("Not Found",safe=False)
        else:
            return JsonResponse("Error",safe=False)

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
        j=Job.objects.filter(JobTitle__contains=data["Title"]).filter(Province__contains=data["City"]).filter(Skills__contains=data["Skills"])
        # __contains
        print(data)
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
        save=CVserl(data=data)
        if save.is_valid():
            save.save()
            return JsonResponse(data['Name'], safe=False)
        else:
            return JsonResponse(save.errors, safe=False)

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
        else:
            return JsonResponse(serializer.errors,safe=False)

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


