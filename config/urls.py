from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('accounts/', include('apps.accounts.urls', namespace='accounts')),
                  path('', include('apps.products.urls', namespace='products')),
                  path('contacts/', include('apps.contacts.urls', namespace='contacts')),
                  path('carts/', include('apps.carts.urls', namespace='carts')),
                  path('posts/', include('apps.posts.urls', namespace='posts')),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
