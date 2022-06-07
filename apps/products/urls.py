from django.urls import path
from . import views
app_name = 'products'

urlpatterns = [
    path('',views.index,name='index'),
    path('products/',views.product_view,name='product-list'),
    path('detail/<int:pk>/',views.product_detail,name='product-detail'),


]