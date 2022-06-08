
from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username','student_id']
    list_display_links = ['id']

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['id', 'author_id', 'proj_name']#'created_at', 'updated_at' ]
    list_display_links = ['id', 'author_id']
class FilesAdmin(admin.ModelAdmin):
    list_display = ['id', 'project','user','file_name', 'title','content', 'comment' ]
    list_display_links = ['id', 'project', 'user']

admin.site.register(User,UserAdmin)
admin.site.register(Project,ProjectAdmin)
admin.site.register(Files,FilesAdmin)
# Register your models here.
