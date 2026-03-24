📦 React Vite App with JSON Server & Clerk Auth

This project is a React application built with Vite, using JSON Server as a fake backend and Clerk for authentication. It demonstrates user login/signup, protected routes, and CRUD operations.

🚀 Features
⚡ Fast development with Vite
🔐 Authentication using Clerk
📦 Fake REST API using JSON Server
🛒 User-specific data (e.g., cart, products)
🔍 Category-based filtering
📱 Responsive UI
🛠️ Tech Stack
Frontend: React (Vite)
Backend (Mock): JSON Server
Authentication: Clerk
HTTP Client: Axios
Routing: React Router DOM
📁 Project Structure
project-root/
│
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── api/
│ ├── App.jsx
│ └── main.jsx
│
├── db.json
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Hetvikathiriya/React-with-JSON-sever
cd your-repo-name
2️⃣ Install dependencies
npm install
3️⃣ Setup Clerk Authentication
Go to https://clerk.dev
Create an account
Create a new application
Copy your Publishable Key

Now create .env file:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
4️⃣ Start JSON Server

Make sure you have db.json file.

npx json-server --watch db.json --port 3000
5️⃣ Run React App
npm run dev
🔐 Authentication Flow
Users can Sign Up / Login using Clerk
Protected routes require authentication
User data is filtered using Clerk user ID
📡 API Example (JSON Server)
Get all products
GET /products
Add to cart
POST /cart
Get user-specific cart
GET /cart?userId=USER_ID
📸 Screens (Optional)
Home Page
Login Page
Product Page
Cart Page

(Add screenshots here)

🧪 Scripts
npm run dev # Start frontend
npm run build # Build project
npm run preview # Preview build
📌 Future Improvements
Payment integration
Admin dashboard
Backend with Node.js & MongoDB
Better UI/UX
🤝 Contributing

Feel free to fork this project and contribute!

📄 License

This project is licensed under the MIT License.

🙋‍♀️ Author

Hetvi
