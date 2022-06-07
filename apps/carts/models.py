import uuid

from django.contrib.auth.models import User
from django.db import models
from ..products.models import Product


class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return f'wishlist of {self.user.username}'


class Cart(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    is_ordered = models.BooleanField(default=False)

    @property
    def get_cart_items(self):
        cart_items=self.cart_items.all()
        total=sum([item.quantity for item in cart_items.all()])
        return total

    @property
    def get_cart_total(self):
        cart_items=self.cart_items.all()
        total=sum([item.get_total for item in cart_items])
        return total


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.SET_NULL, null=True, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(null=True, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def get_total(self):
        return self.quantity * self.product.price


class Order(models.Model):
    trans_id=models.UUIDField(uuid.uuid4,unique=True,editable=False)
    cart=models.ForeignKey(Cart,on_delete=models.SET_NULL,null=True)
    client=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    phone=models.CharField(max_length=20)
    address=models.CharField(max_length=50)
    note=models.CharField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'order of {self.client.username} {self.id}'
