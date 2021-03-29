from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('api/', include('base.urls')),
    path('admin/', admin.site.urls),
]


# setting url to static file example like images
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
