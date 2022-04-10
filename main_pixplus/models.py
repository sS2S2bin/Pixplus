from asyncio import FastChildWatcher
from enum import unique
from pyexpat import model
from statistics import mode
from turtle import title
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import uuid

class Userlist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)

class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()

class Project(models.Model):
    id = models.BigAutoField(help_text="Project ID", primary_key=True)
    author_id = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE, db_column="author_id") # 연결된 N 쪽 데이터 모두 삭제
    proj_name = models.CharField('프로젝트이름',max_length=20, null=False)
    created_at = models.DateField(default=timezone.now)
    updated_at = AutoDateTimeField(default=timezone.now)

    def __str__(self):
        return self.proj_name()
    
    class Meta:
        ordering = ["-updated_at"]



class Files(models.Model):
    id = models.BigAutoField(help_text="Files ID", primary_key=True)
    project_id = models.ForeignKey(Project, related_name="project", on_delete=models.CASCADE, db_column="project_id")
    file_name = models.CharField('파일이름',max_length=20, null=False)
    title = models.CharField('제목',max_length=20, null=True)
    content = models.TextField('내용',null=True)
    comment = models.TextField('댓글',null=True)
    created_at = models.DateField(default=timezone.now)
    updated_at = AutoDateTimeField(default=timezone.now)




# Create your models here.
