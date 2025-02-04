from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer

# ViewSet to handle all CRUD operations (Create, Read, Update, Delete) for contacts
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()  # Retrieve all contacts from the database
    serializer_class = ContactSerializer  # Use the serializer to convert data to/from JSON
