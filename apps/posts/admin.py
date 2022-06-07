from django.contrib import admin
from .models import Comment,Category,Post,Tag


class Admin(admin.ModelAdmin):
    filter_horizontal = ('tag',)


admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(Post,Admin)
admin.site.register(Tag)
