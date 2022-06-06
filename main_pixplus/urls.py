from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('newpixple', views.newpixple, name='newpixple'),#회원가입 html 변경
    path('signup', views.signup, name='signup'), #회원가입 폼 함수 연결
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('customurl',views.customurl, name='customurl'),
    path('news',views.news, name='news'),
    path('file1',views.file1, name='file1'),
    path('testdrag',views.testdrag, name='testdrag'),
    path('id_overlap_check', views.id_overlap_check, name='id_overlap_check'),
    path('create_proj', views.create_proj, name='create_proj'),
    path('create_file', views.create_file, name='create_file'),
]