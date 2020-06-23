from django.shortcuts import render
from django.views.generic import DetailView, ListView, TemplateView
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from .models import Post
# Create your views here.


class PhotoGalleryView(ListView):
    model = Post
    template_name = 'index.html'
