from django.db import models



class CV(models.Model):
    Email = models.CharField(max_length=30,primary_key=True)
    Name = models.CharField(max_length=30)
    PhoneNumber = models.CharField(max_length=30)
    Address = models.CharField(max_length=30)
    Objective = models.CharField(max_length=30)
    SchoolSubject = models.CharField(max_length=30)
    SchoolAttended = models.CharField(max_length=30)
    SchoolMarks = models.CharField(max_length=30)
    ClgSubject = models.CharField(max_length=30)
    ClgAttended = models.CharField(max_length=30)
    ClgMarks = models.CharField(max_length=30)
    UniSubject = models.CharField(max_length=30)
    UniAttended = models.CharField(max_length=30)
    UniMarks = models.CharField(max_length=30)
    Skills = models.CharField(max_length=30)
    Experience = models.CharField(max_length=30)

    def __str__(self):
        return self.Name

class Job(models.Model):
    JobID = models.IntegerField(primary_key=True)
    JobTitle = models.CharField(max_length=30)
    JobDescription = models.CharField(max_length=30)
    Salary = models.CharField(max_length=30)
    URL = models.CharField(max_length=30)
    Province = models.CharField(max_length=30)
    City = models.CharField(max_length=30)
    Address = models.CharField(max_length=30)
    DatePosted = models.CharField(max_length=30)

    def __str__(self):
        return self.JobTitle


class User(models.Model):
    Username = models.CharField(max_length=30,primary_key=True)
    Email = models.CharField(max_length=30)
    Password = models.CharField(max_length=30)
    PhoneNumber = models.CharField(max_length=30)
    isCvCreated = models.IntegerField

    def __str__(self):
        return self.Username