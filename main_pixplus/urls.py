from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('newpixple', views.newpixple, name='newpixple'),#회원가입 html 변경
    path('signup', views.signup, name='signup'), #회원가입 폼 함수 연결
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('id_overlap_check', views.id_overlap_check, name='id_overlap_check'),
    path('create_proj', views.create_proj, name='create_proj'),
]