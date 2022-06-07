from django.urls import path
from .views import blog_view, blog_detail

app_name = 'posts'

urlpatterns = [
    path('', blog_view, name='blog'),
    path('blog-detail/<int:pk>/', blog_detail, name='blog-detail')

]
