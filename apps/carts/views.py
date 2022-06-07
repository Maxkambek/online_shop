from django.http import JsonResponse
from django.shortcuts import render, redirect

from .forms import OrderForm
from .models import Cart, Order, CartItem, Product, Wishlist


def my_cart_view(request):
    carts = CartItem.objects.all()
    total = 0
    for i in carts.all():
        total = i.cart.get_cart_total
    ctx = {
        'carts': carts,
        'total': total,
    }
    return render(request, 'shoping-cart.html', ctx)


def add_cart(request):
    pid = request.GET.get('_pid')
    print(pid)
    user = request.user
    product = Product.objects.get(id=pid)
    my_cart, new_cart = Cart.objects.get_or_create(client=user, is_ordered=False)
    data = None
    if my_cart:
        CartItem.objects.create(product=product, cart=my_cart)
        data = {
            'success': True,
            'product': product.name,
        }
    if new_cart:
        CartItem.objects.create(product=product, cart=new_cart)
        data = {
            'success': True,
            'product': product.name,
        }
    return JsonResponse(data, status=201)


def plus_quantity(request):
    pk = request.GET.get('_iid')
    obj = CartItem.objects.get(id=pk)
    obj.quantity += 1
    obj.save()
    data = {'success': True, 'message': 'cart item incremented by 1', 'cart_item': obj.get_total}

    return JsonResponse(data, status=200)


def minus_quantity(request):
    pk = request.GET.get('_iid')
    obj = CartItem.objects.get(id=pk)
    if obj.quantity > 1:
        obj.quantity -= 1
        obj.save()
        data = {'success': True, 'message': 'cart item decremented by 1'}
    else:
        obj.delete()
        data = {'success': True, 'message': 'cart item deleted'}

    return JsonResponse(data, status=200)


def wishlist(request):
    wishlists = Wishlist.objects.all()
    ctx = {
        'wishlists': wishlists
    }

    return render(request, 'wishlist.html', ctx)


def checkout(request):
    form = OrderForm()
    cart = Cart.objects.get(client=request.user)
    if request.method == "POST":
        form = OrderForm(request.POST or None)
        if form.is_valid():
            order = form.save(commit=False)
            order.client = request.user
            order.cart = cart
            order.save()
            return redirect('/')

    ctx = {
        'form': form,
    }

    return render(request, 'checkout.html', ctx)


def remove_wishlist(request):
    pk = request.GET.get('_pid')
    obj = Wishlist.objects.get(id=pk)
    obj.delete()
    data = {'success': True, 'message': 'remove vishlist'}

    return JsonResponse(data, status=200)
