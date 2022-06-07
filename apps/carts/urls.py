from django.urls import path
from . import views
app_name = 'carts'

urlpatterns = [
    path('', views.my_cart_view, name='shopping-cart'),
    path('wishlist/',views.wishlist,name='wishlist'),
    path('checkout/',views.checkout,name='checkout'),
    path('add-cart/',views.add_cart,name='add-cart'),

    path('minus-quantity/',views.minus_quantity,name='minus-quantity'),
    path('plus-quantity/', views.plus_quantity, name='plus-quantity'),
    path('remove-wishlist/',views.remove_wishlist,name='remove-wishlist'),

]