import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/index.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md'

const Contacts = () => {
    // State variables
    const [contacts, setContacts] = useState([]); // Store contacts list
    const [loading, setLoading] = useState(true); // Manage loading state
    const [newContact, setNewContact] = useState({ name: '', email: '', phone_number: '' }); // Store new/edit contact data
    const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
    const [successMessage, setSuccessMessage] = useState(null); // Store success message
    const [errorMessage, setErrorMessage] = useState(null); // Store error message
    const [searchTerm, setSearchTerm] = useState(''); // Store search term for filtering

    // Fetch contacts from API
    const fetchContacts = () => {
        axios
            .get('http://127.0.0.1:8000/contacts/')
            .then(response => {
                setContacts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
                setLoading(false);
            });
    };

    // Fetch contacts on component mount and refresh every 5 seconds
    useEffect(() => {
        fetchContacts();
        const interval = setInterval(fetchContacts, 5000);
        return () => clearInterval(interval);
    }, []);

    // Handle input change for contact form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    // Open modal to add new contact
    const handleAddContactClick = () => {
        setNewContact({ name: '', email: '', phone_number: '' });
        setIsModalOpen(true);
        setSuccessMessage(null);
        setErrorMessage(null);
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSuccessMessage(null);
        setErrorMessage(null);
    };

    // Handle form submission for adding or updating contacts
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(null);

        const isUpdate = !!newContact.id; // Check if it's an update or new contact
        const apiCall = isUpdate
            ? axios.put(`http://127.0.0.1:8000/contacts/${newContact.id}/`, newContact)
            : axios.post('http://127.0.0.1:8000/contacts/', newContact);

        apiCall
            .then(response => {
                const updatedContact = response.data;
                setContacts(isUpdate
                    ? contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact)
                    : [...contacts, updatedContact]);

                setNewContact({ name: '', email: '', phone_number: '' });
                setIsModalOpen(false);
                setSuccessMessage(isUpdate ? 'Contact updated successfully!' : 'Contact added successfully!');
                setTimeout(() => setSuccessMessage(null), 3000);
            })
            .catch(error => {
                console.error(`Error ${isUpdate ? 'updating' : 'creating'} contact:`, error);
                setErrorMessage("Error in operation. Please try again.");
                setTimeout(() => setErrorMessage(null), 3000);
            });
    };

    // Handle editing a contact
    const handleEdit = (contact) => {
        setNewContact({ ...contact });
        setIsModalOpen(true);
        setSuccessMessage(null);
        setErrorMessage(null);
    };

    // Handle deleting a contact
    const handleDelete = (contactId) => {
        axios
            .delete(`http://127.0.0.1:8000/contacts/${contactId}/`)
            .then(() => {
                setContacts(contacts.filter(contact => contact.id !== contactId));
            })
            .catch(error => {
                console.error('Error deleting contact:', error);
            });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter contacts based on search term
    const filteredContacts = contacts.filter(contact => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseName = contact.name.toLowerCase();
        const lowerCaseEmail = contact.email ? contact.email.toLowerCase() : ''; // Handle potential null email
        const lowerCasePhone = contact.phone_number.toLowerCase();

        return (
            lowerCaseName.includes(lowerCaseSearchTerm) ||
            lowerCaseEmail.includes(lowerCaseSearchTerm) ||
            lowerCasePhone.includes(lowerCaseSearchTerm)
        );
    });

    return (
        <div className="container">
            <h1>Contacts</h1>
            
            {/* Search Input */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            
            {/* Add Contact Button */}
            <button className="add-contact-btn" onClick={handleAddContactClick}>
                <MdPersonAdd /> Add Contact
            </button>

            {/* Display Loading State or Contacts List */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="contact-list">
                    {filteredContacts.map((contact) => (
                        <li key={contact.id} className="contact-item">
                            <span>{contact.name}</span>
                            <span><MdEmail /> {contact.email}</span>
                            <span><MdPhone /> {contact.phone_number}</span>
                            
                            {/* Edit and Delete Buttons */}
                            <div className='btn'>
                                <button className="edit-btn" onClick={() => handleEdit(contact)}><FaEdit /></button>
                                <button className="delete-btn" onClick={() => handleDelete(contact.id)}><FaTrashAlt /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Modal for Adding/Editing Contact */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-modal" onClick={handleCloseModal}>&times;</button>
                        <h2>{newContact.id ? 'Edit Contact' : 'Create New Contact'}</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <label>Name: <input type="text" name="name" value={newContact.name} onChange={handleChange} required /></label>
                            <label>Email: <input type="email" name="email" value={newContact.email} onChange={handleChange} required /></label>
                            <label>Phone Number: <input type="text" name="phone_number" value={newContact.phone_number} onChange={handleChange} required /></label>
                            <button type="submit" className="submit-btn">{newContact.id ? 'Update Contact' : 'Add Contact'}</button>
                        </form>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contacts;
