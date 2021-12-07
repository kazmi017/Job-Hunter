from django.shortcuts import render
#from .Scrapper.scrapping import data as d
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Job
from .serializers import Jobser

# def scrapy():
#     data=JSONParser().parse(d)
#     serializer = Jobser(data=data)

#     if serializer.is_valid():
#         serializer.save()
#         return print("done")



def joblist(request):
    if request.method == 'GET':
        job= Job.objects.all()
        serializer = Jobser(job, many=True)
        return JsonResponse(serializer.data, safe=False)


