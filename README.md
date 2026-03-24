📦 React Vite App with JSON Server & Clerk Auth

A modern React application built with Vite, using JSON Server as a mock backend and Clerk for authentication. This project demonstrates authentication, protected routes, and CRUD operations with user-specific data.

🚀 Features
⚡ Lightning-fast development with Vite
🔐 Secure authentication using Clerk
📦 Mock REST API with JSON Server
🛒 User-specific data handling (cart, products, etc.)
🔍 Category-based filtering
📱 Fully responsive UI
🛠️ Tech Stack
Technology Usage
React (Vite) Frontend framework
JSON Server Mock backend API
Clerk Authentication
Axios API requests
React Router DOM Routing
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
1️⃣ Clone the Repository
git clone https://github.com/Hetvikathiriya/React-with-JSON-sever
cd React-with-JSON-sever
2️⃣ Install Dependencies
npm install
3️⃣ Setup Clerk Authentication
Visit https://clerk.dev
Create an account and a new application
Copy your Publishable Key

Create a .env file in the root directory:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
4️⃣ Start JSON Server

Make sure db.json exists in your project.

npx json-server --watch db.json --port 3000
5️⃣ Run the React App
npm run dev
🔐 Authentication Flow
Users can Sign Up / Login via Clerk
Protected routes require authentication
Data is filtered using the Clerk User ID
📡 API Endpoints (JSON Server)
Method Endpoint Description
GET /products Get all products
POST /cart Add item to cart
GET /cart?userId=USER_ID Get user-specific cart
📸 Screenshots

Add screenshots of your application here:

🏠 Home Page
🔑 Login Page
📦 Product Page
🛒 Cart Page
🧪 Available Scripts
npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
📌 Future Improvements
💳 Payment Integration
🧑‍💼 Admin Dashboard
🌐 Real Backend (Node.js + MongoDB)
🎨 Enhanced UI/UX
🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

📄 License

This project is licensed under the MIT License.

🙋‍♀️ Author

Hetvi Kathiriya
