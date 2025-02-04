from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet

# Set up a router to automatically generate the URLs for the ContactViewSet
router = DefaultRouter()
router.register(r'contacts', ContactViewSet)

# Include the router's URLs in the urlpatterns list
urlpatterns = [
    path('', include(router.urls)),
]
