![image](https://github.com/user-attachments/assets/51fa5cb0-8d02-4534-a39f-51f913418c70)


✅ Step 1: Go into backend folder
cd backend

✅ Step 2: Initialize Node.js project
npm init -y (This will create a package.json file to manage dependencies.)

✅ Step 3: Install Required Dependencies
npm install express mongoose dotenv bcryptjs jsonwebtoken cors

🔹 What each package does:
express → Web framework to handle routes
mongoose → MongoDB connection & schemas
dotenv → Load env variables from .env
bcryptjs → Password hashing
jsonwebtoken → JWT token creation
cors → Allow frontend to connect to backend (Cross-Origin Resource Sharing)


MONGO DB SETUP
📚 What I Set Up in MongoDB (Short Description)
I have used MongoDB Atlas, which is a free cloud-based database platform by MongoDB, to store and manage the feedback data securely.

- 🧱 Key Things I Configured:
- ✅ MongoDB Cluster (Cloud DB)

I created a free-tier cluster on MongoDB Atlas to host my database online.
This cluster allows my backend server to connect to the database from anywhere securely.

- 👤 Database User

I created a database user (admin) with a secure password.
This user is used to authenticate and connect my backend to the database.

- 🌐 Network Whitelisting

I allowed access to the database from any IP address (0.0.0.0/0) so that my local server or deployed app can connect without restrictions.

- 🔗 Connection URI

I copied the MongoDB connection string (DB URI) from Atlas and added it to a .env file in my project to securely connect my Express.js server to MongoDB.

- 🗃️ Database Name

I used a custom database name called feedback-db.
MongoDB automatically creates the database and collections as soon as I insert data.

- 📦 Purpose in the Project
In my Feedback Management System, MongoDB is used to store all user-submitted feedback and admin credentials securely.

Two Collections Will Be Created:
feedbacks – Stores feedback submitted by users (name, email, message, rating)

admins – Stores admin login credentials (email, hashed password)

- 💡 How it connects:
My Node.js + Express backend connects to MongoDB using Mongoose and the connection URI stored in .env.


- models/Feedback.js ✅
🎯 This file defines the structure of feedback data using a Mongoose Schema.

It says every feedback must have: name, email, message, rating, createdAt

It makes sure rating is between 1–5

MongoDB will store feedbacks using this format in a collection called feedbacks

Think of it like a blueprint or a form for feedback entries.

- controllers/feedbackController.js ✅
🎯 This is where the actual logic for saving feedback is written.

It receives the feedback from the user

Validates the input

Saves it to the database using the Feedback model

Sends a success or error response back

It’s like the person behind the desk who takes the filled feedback form and files it properly.

- routes/feedbackRoutes.js ✅
🎯 This file connects URL paths to the controller logic.

When someone hits the route /api/feedback, it calls the submitFeedback() function

It makes the system organized by keeping routes separate from logic

Think of it like a receptionist who sends you to the correct department (controller).

- Postman (not a file but a tool) ✅
🎯 Used to test your API endpoints manually before you build the frontend.

You can simulate sending feedback without a form

Helpful for checking if routes and database are working

🔐 Step-by-Step Plan for Admin Login + JWT
We'll now do the following:

- Create the Admin Model
MongoDB schema with email and hashed password.

- Create Admin Login Route
Admin sends email and password
We check if they exist and match
If valid, generate a JWT token and send it back

- Create Auth Middleware
Middleware to verify JWT token for protected routes

- Protect Feedback Routes (GET, DELETE)


Client (Postman or React) 
     ⬇️ Login
POST /api/admin/login
     ⬇️ 
Receives JWT token ✅

--- For Every Admin Action ---

Client sends:
GET /api/admin/feedback
Headers: Authorization: Bearer eyJhbGci...

     ⬇️
Middleware (authMiddleware.js):
- Reads token
- Verifies it
- Allows or blocks

     ⬇️
If valid → Call controller function
     ⬇️
Return data to admin


🛠 Step 3: Define Pages and Components
| Page               | File                         | Purpose                                |
| ------------------ | ---------------------------- | -------------------------------------- |
| 📝 Submit Feedback | `components/FeedbackForm.js` | User fills form                        |
| 🔐 Admin Login     | `pages/AdminLogin.js`        | Admin enters email/password            |
| 📄 Feedback List   | `pages/FeedbackList.js`      | Admin sees all feedback                |
| 📄 Feedback Detail | `pages/FeedbackDetail.js`    | Admin sees one feedback                |
| 🔁 Routing         | `App.js`                     | Handle routes using `react-router-dom` |

