from asyncio import FastChildWatcher
from pyexpat import model
from turtle import title
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Project(models.Model):
    proj_name = models.CharField('프로젝트이름',max_length=20, null=False)
    author = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE) # 연결된 N 쪽 데이터 모두 삭제
    created_at = models.DateTimeField('작성일', default=timezone.now)

    def __str__(self):
        return self.proj_name()

class Files(models.Model):
    file_name = models.CharField('파일이름',max_length=20, null=False)
    index = models.CharField('인덱스',max_length=20, null=True)
    content = models.TextField('내용',null=True)
    comment = models.TextField('댓글',null=True)
    folder = models.ForeignKey(Project, related_name='files', on_delete=models.CASCADE)
    created_at = models.DateTimeField('작성일', default=timezone.now)



# Create your models here.
