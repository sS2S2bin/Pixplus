
from asyncio import FastChildWatcher
from enum import unique
from pyexpat import model
from statistics import mode
from turtle import title
from django.db import models
from django.dispatch import receiver
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    student_id = models.CharField(max_length=10, null=True)

class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()

class Project(models.Model):
    id = models.AutoField(help_text="Project ID", primary_key=True)
    author= models.ForeignKey(User, related_name='user', on_delete=models.CASCADE, db_column="author") # 연결된 N 쪽 데이터 모두 삭제
    # author_name = models.CharField('author_name',max_length=20, null=True) # 연결된 N 쪽 데이터 모두 삭제
    proj_name = models.CharField('프로젝트이름',max_length=20, null=False)


    def __str__(self):
        return self.proj_name
    
    # class Meta:
    #     ordering = ["-updated_at"]



class Files(models.Model):
    id = models.AutoField(help_text="Files ID", primary_key=True)
    project = models.ForeignKey(Project, related_name="project", on_delete=models.CASCADE, db_column="project")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_name = models.CharField('파일이름',max_length=20, null=False)
    title = models.CharField('제목',max_length=20, null=True)
    content = models.TextField('내용',null=True)
    comment = models.TextField('댓글',null=True)

    
    def __str__(self):
        return self.file_name
        



# Create your models here.