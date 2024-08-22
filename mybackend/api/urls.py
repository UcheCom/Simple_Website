from django.urls import path
from .views import hello_world, second_endpoint

urlpatterns = [
    path('hello/', hello_world),
    path('second/', second_endpoint),
]