from django.shortcuts import render, redirect
from .models import Post, Comment, Category, Tag
from .forms import CommentForm
from ..products.models import Product


def blog_view(request):
    posts = Post.objects.all()
    tags = Tag.objects.all()
    categories = Category.objects.all()
    products=Product.objects.all().order_by('-id')[:3]
    cat=request.GET.get('cat')
    tag=request.GET.get('tag')
    search=request.GET.get('search')
    if cat:
        posts=posts.filter(category__title__iexact=cat)
    if tag:
        posts=posts.filter(tag__title__iexact=tag)
    if search:
        posts=posts.filter(title__icontains=search)
    ctx = {
        'posts': posts,
        'tags': tags,
        'categories': categories,
        'products':products,

    }

    return render(request, 'blog.html', ctx)


def blog_detail(request, pk):
    post = Post.objects.get(id=pk)
    tags = Tag.objects.all()
    categories = Category.objects.all()
    products=Product.objects.all().order_by('-id')[:3]
    form=CommentForm()

    if request.method=="POST":
        form=CommentForm(request.POST or None)
        if form.is_valid():
            comment=form.save(commit=False)
            comment.author=request.user
            comment.post=post
            comment.save()
            return redirect('/blog/')

    ctx = {
        'post': post,
        'tags': tags,
        'categories': categories,
        'form':form,
        'products':products

    }

    return render(request, 'blog-detail.html', ctx)
