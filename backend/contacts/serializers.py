from rest_framework import serializers
from .models import Contact

# Serializer to convert Contact model instances to JSON format and vice versa
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact  # Use the Contact model
        fields = '__all__'  # Include all fields in the model
