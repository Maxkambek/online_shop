from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    title=models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Tag(models.Model):
    title=models.CharField(max_length=221)

    def __str__(self):
        return self.title


class Post(models.Model):
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=222)
    content=models.TextField()
    image=models.ImageField(upload_to='posts/')
    created_at=models.DateTimeField(auto_now_add=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    tag=models.ManyToManyField(Tag)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    name=models.CharField(max_length=221)
    email=models.EmailField(max_length=221)
    website=models.URLField()
    message=models.TextField()

    def __str__(self):
        return self.name


