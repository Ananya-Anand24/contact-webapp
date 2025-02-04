from django.db import models

# Define the Contact model to store information about each contact
class Contact(models.Model):
    name = models.CharField(max_length=100)  # Stores the contact's name with a max length of 100 characters
    email = models.EmailField(unique=True)  # Stores the contact's address (no character limit)
    phone_number = models.CharField(max_length=15)  # Stores the contact's phone number

    def __str__(self):
        # Return the contact's name when the object is printed
        return self.name
