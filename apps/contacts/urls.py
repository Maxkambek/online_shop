from django.urls import path
from .views import contact_view,about_view
app_name = 'contacts'

urlpatterns = [
    path('',contact_view,name='contact'),
    path('about/',about_view,name='about')
]