# Contacts Web Application

This is a simple **Contacts Web Application** that allows users to perform CRUD operations (Create, Read, Update, Delete) on contact information. The project is built using:

- **Backend:** Django (Python)
- **Frontend:** React (JavaScript)
- **Database:** MySQL

---

## 🚀 Features

- Manage contacts with fields: Name, Email, Phone.
- RESTful API for backend operations.
- Dynamic user interface using React.
- Backend built with Django REST Framework.
- MySQL database for storing contact information.

---

## 🛠️ Technologies Used

- **Backend:** Django, Django REST Framework
- **Frontend:** React
- **Database:** MySQL
- **Other Tools:** Axios, dotenv

---

## 📋 Instructions to Clone the Repository

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ananya-Anand24/contact-webapp
   cd contact-webapp
   ```

---

## ⚙️ Installation and Setup

### **Backend (Django)**

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   source venv/bin/activate  # On macOS/Linux
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. **Database Schema Already Setup:**  
   Migrations have already been applied and are included in the repository.

5. **Run the backend server:**
   ```bash
   python manage.py runserver
   ```

---

### **Frontend (React)**

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Run the React development server:
   ```bash
   npm start
   ```

---

### ✅ Running the Application Locally

- **Start the Backend Server:**  
  Ensure the Django server is running on `http://127.0.0.1:8000/`.

- **Start the Frontend Server:**  
  Ensure the React app is running on `http://localhost:3000/`.

- **Testing:**  
  Open your browser and navigate to `http://localhost:3000/` to test the application.

  Add, update, delete, and view contacts to verify backend and frontend integration.

---

## ✅ Testing the Web Application

### **Pre-Configured Database and Schema**
- The database schema is already included through migrations.
- No manual migration steps are required.
- Use **MySQL** to inspect or verify contact records.

### **Testing CRUD Operations**
1. **Open the App:**  
   Navigate to `http://localhost:3000/` to test the application.

2. **Test CRUD Operations:**
   - Add new contacts.
   - View existing contacts.
   - Update contact details.
   - Delete contacts.

### **API Testing**
Use Postman or any API testing tool:

- `GET /api/contacts/` → Retrieve all contacts.
- `POST /api/contacts/` → Add a new contact.
- `PUT /api/contacts/<id>/` → Update a contact.
- `DELETE /api/contacts/<id>/` → Delete a contact.

---

## 🌐 High-Level Deployment Instructions

### **Backend Deployment**
- Recommended Platform: **AWS EC2** or **Render**.
- Use **Gunicorn** and **Nginx** for production deployment.

### **Frontend Deployment**
- Recommended Platform: **Netlify** or **Vercel**.
- Build and deploy the frontend with:
   ```bash
   npm run build
   ```

## 🤝 Contributors

- **Your Name** - Ananya Anand

