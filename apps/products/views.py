from django.shortcuts import render, redirect
from .models import Banner, Color, Product, Category, Tag, AdditionalInformation
from .forms import ReviewCreateForm
from ..carts.models import CartItem


def index(request):
    banners = Banner.objects.all()
    products = Product.objects.all()
    category = Category.objects.all()
    tags = Tag.objects.all()
    colors = Color.objects.all()
    # carts_base
    carts = CartItem.objects.all()
    total = 0
    for i in carts.all():
        total = i.cart.get_cart_total
    total = round(total)
    tag = request.GET.get('tag')
    col = request.GET.get('col')
    search = request.GET.get('search-product')
    if tag:
        products = products.filter(tag__title__iexact=tag)
    if col:
        products = products.filter(color__color__iexact=col)
    if search:
        products = products.filter(name__icontains=search)

    ctx = {
        'banners': banners,
        'products': products,
        'categories': category,
        'tags': tags,
        'colors': colors,
        'carts': carts,
        'total': total,

    }

    return render(request, 'index.html', ctx)


def product_view(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    tags = Tag.objects.all()
    colors = Color.objects.all()

    tag = request.GET.get('tag')
    col = request.GET.get('col')
    search = request.GET.get('search')

    if tag:
        products = products.filter(tag__title__iexact=tag)
    if col:
        products = products.filter(color__color__iexact=col)
    if search:
        products = products.filter(name__icontains=search)
    ctx = {
        'products': products,
        'categories': categories,
        'tags': tags,
        'colors': colors,
    }

    return render(request, 'product.html', ctx)


def product_detail(request, pk):
    product = Product.objects.get(id=pk)
    objects = AdditionalInformation.objects.get(product__id=pk)
    productss = Product.objects.all()
    form = ReviewCreateForm()
    if request.method == 'POST':
        form = ReviewCreateForm(request.POST or None)
        if form.is_valid():
            reviews = form.save(commit=False)
            reviews.product = product
            reviews.save()
            return redirect('/')

    ctx = {
        'product': product,
        'obj': objects,
        'form': form,
        'productss': productss
    }

    return render(request, 'product-detail.html', ctx)
