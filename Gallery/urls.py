from django.urls import path
from . import views

urlpatterns = [
    path('', views.PhotoGalleryView.as_view(), name='main_page')
]