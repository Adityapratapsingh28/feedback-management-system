
# 📜 Feedback Management System – Full Stack

A complete full-stack project for collecting user feedback and managing it through a secure admin panel. Built using **React + Vite** (frontend), **Node.js + Express.js** (backend), and **MongoDB Atlas** with **JWT-based authentication**.

---

## 🔧 Tech Stack

* Frontend: React + Vite + Axios + React Router
* Backend: Node.js + Express
* Database: MongoDB (Cloud – Atlas)
* Auth: JWT (JSON Web Token)
* Security: bcrypt.js

---

## 📁 Project Structure

```
feedback-management-system/
├── backend/
│   ├── config/              # MongoDB connection
│   ├── controllers/         # Route logic (feedback, admin)
│   ├── middleware/          # JWT auth middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── server.js            # Entry point
│   └── .env                 # Env vars
│
├── frontend/
│   ├── src/
│   │   ├── components/      # FeedbackForm.jsx
│   │   ├── pages/           # AdminLogin, FeedbackList, FeedbackDetail
│   │   ├── App.jsx          # Routes setup
│   │   └── main.jsx         # Entry point
│   └── index.html
│
├── postman/
│   └── FeedbackSystem.postman_collection.json
│
└── README.md
```

---

## 🚀 Getting Started

### 🧱 Clone the Repo

```bash
git clone https://github.com/yourusername/feedback-management-system.git
cd feedback-management-system
```

---

## 📆 Backend Setup

### Step 1: Install dependencies

```bash
cd backend
npm install
```

### Step 2: Create `.env` file

Create a file named `.env` inside `/backend`:

```env
PORT=5001
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/feedback-db
JWT_SECRET=your_jwt_secret_here
```

> Replace with your actual MongoDB URI and secret key.

---

### Step 3: Start the Server

```bash
npm run start
```

You should see:

```
MongoDB connected
Server running on http://localhost:5001
```

---

### 👤 Admin Setup (Insert Manually)

Since there's no registration route, insert an admin manually.

#### Step 1: Hash password using bcrypt

```bash
node -e "console.log(require('bcryptjs').hashSync('admin123', 10))"
```

#### Step 2: Insert into MongoDB (Compass or Shell)

```json
{
  "email": "admin@example.com",
  "password": "<paste-hashed-password-here>"
}
```

---

## 🌐 Frontend Setup

### Step 1: Install Vite and packages

```bash
cd ../frontend
npm install
```

### Step 2: Start frontend server

```bash
npm run dev
```

Go to:

```
http://localhost:5173/
```

📅 Your React app should be running.

---

## 📬 API Endpoints

### ➔ Public: Submit Feedback

**POST** `/api/feedback`

```json
{
  "name": "Aditya",
  "email": "aditya@example.com",
  "message": "Loved the service!",
  "rating": 5
}
```

---

### ➔ Admin Login

**POST** `/api/admin/login`

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

👉 Returns JWT:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

### ➔ Get All Feedbacks

**GET** `/api/admin/feedback`

Headers:

```
Authorization: Bearer <your-token>
```

---

### ➔ Get Feedback by ID

**GET** `/api/admin/feedback/:id`

Headers:

```
Authorization: Bearer <your-token>
```

---

### ➔ Delete Feedback

**DELETE** `/api/admin/feedback/:id`

Headers:

```
Authorization: Bearer <your-token>
```

---

## 🤎 Postman Collection

You can import the API test collection from:

```
/postman/FeedbackSystem.postman_collection.json
```

Use this to:

* Submit feedback
* Login as admin
* Get/delete feedback

---

## 🤔 Frontend Routes (React)

| Route                 | Description              |
| --------------------- | ------------------------ |
| `/`                   | Feedback submission form |
| `/admin`              | Admin login              |
| `/admin/feedbacks`    | View all feedbacks       |
| `/admin/feedback/:id` | View single feedback     |

---

## Screenshots

<img width="1303" alt="Screenshot 2025-06-25 at 3 40 47 PM" src="https://github.com/user-attachments/assets/af74aaf2-ff82-43ae-ae3d-450a3856b5cf" />

<img width="1315" alt="Screenshot 2025-06-25 at 3 42 09 PM" src="https://github.com/user-attachments/assets/6a4c3ee9-9703-42f8-9aac-5b893da783ba" />

<img width="1048" alt="Screenshot 2025-06-25 at 3 39 49 PM" src="https://github.com/user-attachments/assets/840a0365-e71c-4935-b7ea-bb87a796632f" />

<img width="1275" alt="Screenshot 2025-06-25 at 3 43 29 PM" src="https://github.com/user-attachments/assets/85a29479-d6f9-4ab0-9042-ca4f0ca2beb6" />



## 📣 Contributing

feel free to extend features like pagination, admin registration, feedback filtering, or user dashboards.

---

## 🙌 Author

Built by **Aditya Pratap Singh** for learning + real-world use cases
[GitHub Profile](https://github.com/Adityapratapsingh28)

---

