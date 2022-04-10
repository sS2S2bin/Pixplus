import email
from operator import ipow
from pdb import post_mortem
from time import timezone
from django.shortcuts import redirect, render
from django.contrib import auth # for register
from django.contrib.auth import login, authenticate # for register
from django.contrib.auth.models import User # for register
from django.utils import timezone
import json



# 첫 화면
def index(request):
    return render(request,'index.html')

def newpixple(request):
    return render(request, 'register.html')

#아이디 중복 체크
def id_overlap_check(request):
    username = request.GET.get('username')
    try:
        # 중복 검사 실패
        user = User.objects.get(username=username)
    except:
        # 중복 검사 성공
        user = None
    if user is None:
        overlap = 0 #pass 성공
    else:
        overlap = 1 #fail 실패
    context = {'overlap': overlap}
    return JsonResponse(context)

# 회원가입
def signup(request):
    # signup 으로 POST 요청이 왔을 때, 새로운 유저를 만드는 절차를 밟는다.
    if request.method == 'POST':
        # password와 confirm에 입력된 값이 같다면
        if request.POST['password'] == request.POST['confirm']:
            # user 객체를 새로 생성
            user = User.objects.create_user(
                username=request.POST['username'], 
                password=request.POST['password'])
            # 로그인 한다
            auth.login(request, user)
            return redirect('/')
        else:
            return render(request, 'register.html',{'message': 1})
    # signup으로 GET 요청이 왔을 때, 회원가입 화면을 띄워준다.
    return render(request, 'register.html')


# 로그인
def login(request):
    # login으로 POST 요청이 들어왔을 때, 로그인 절차를 밟는다.
    if request.method == 'POST':
        # login.html에서 넘어온 username과 password를 각 변수에 저장한다.
        username = request.POST['username']
        password = request.POST['password']

        # 해당 username과 password와 일치하는 user 객체를 가져온다.
        user = auth.authenticate(request, username=username, password=password)
        
        # 해당 user 객체가 존재한다면
        if user is not None:
            # 로그인 한다
            auth.login(request, user)
            return redirect('/')
        # 존재하지 않는다면
        else:
            # 딕셔너리에 에러메세지를 전달하고 다시 login.html 화면으로 돌아간다.
            return render(request, 'login.html', {'error' : 1})
    # login으로 GET 요청이 들어왔을때, 로그인 화면을 띄워준다.
    else:
        return render(request, 'login.html')

# 로그 아웃
def logout(request):
    # logout으로 POST 요청이 들어왔을 때, 로그아웃 절차를 밟는다.
    if request.method == 'POST':
        auth.logout(request)
        return redirect('/')

    # logout으로 GET 요청이 들어왔을 때, 로그인 화면을 띄워준다.
    return render(request, 'login.html')

def create_proj(request):
    if request.method == 'POST':
        post = Project()
        post.proj_name = request.POST['proj_name']
        post.author = request.user
        post.created_at = timezone.datetime.now()
        post.updated_at = timezone.datetime.now()
        post.save()
        return redirect('/')
    else:
        return render(request, 'index.html')