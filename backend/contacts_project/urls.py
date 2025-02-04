from django.contrib import admin
from django.urls import path, include

# Define the URL routing for the project
urlpatterns = [
    path('admin/', admin.site.urls),  # Admin site for managing models
    path('', include('contacts.urls')),  # Include the URLs defined in the contacts app
]
