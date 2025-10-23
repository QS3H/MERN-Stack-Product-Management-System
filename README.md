# MERN Stack Product Management System

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage products with a beautiful and responsive UI.

## 🚀 Features

- **Product Management**: Create, read, update, and delete products
- **Responsive Design**: Modern UI built with Chakra UI
- **Real-time Updates**: Instant UI updates using Zustand state management
- **RESTful API**: Well-structured backend API endpoints
- **Database Integration**: MongoDB with Mongoose ODM
- **Production Ready**: Includes production build and deployment scripts

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Chakra UI** - Component library for styling
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-crash-course
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5500
   NODE_ENV=development
   ```

4. **Build and run the application**
   ```bash
   # Build the frontend
   npm run build

   # Start the server (serves both API and frontend)
   npm run dev
   ```

   The application will be available at:
   - Frontend & Backend: http://localhost:5500

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start backend with nodemon (serves built frontend)
npm run build        # Install all dependencies and build frontend
npm start           # Start production server
```

### Frontend Scripts
```bash
cd frontend
npm run dev         # Start frontend development server only
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

## 🌐 API Endpoints

The backend provides RESTful API endpoints for product management:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### Product Schema
```javascript
{
  name: String (required),
  price: Number (required),
  image: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 🏗 Project Structure

```
mern-crash-course/
├── backend/                 # Backend server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── server.js          # Main server file
├── frontend/               # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── store/         # State management
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   └── package.json
├── .env                   # Environment variables
└── package.json          # Root dependencies and scripts
```

## 🎨 UI Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works on all device sizes
- **Dark/Light Mode**: Color mode toggle support
- **Product Cards**: Beautiful product display cards
- **Form Validation**: Client-side form validation
- **Loading States**: Loading indicators for async operations

## 🔧 Troubleshooting

### MIME Type Error
If you encounter: *"Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'"*

**Solutions:**
1. **Rebuild the frontend**: `npm run build`
2. **Restart the server**: `npm run dev`
3. **Clear browser cache** and hard refresh (Ctrl+F5)
4. **Check file exists**: Verify `frontend/dist/assets/` contains the JavaScript files

### Development vs Production
- **Development**: Run `npm run dev` (serves built frontend from Express)
- **Frontend Only**: Run `cd frontend && npm run dev` (Vite dev server)
- **Production**: Run `npm run build && npm start`

### Common Issues
- **Port conflicts**: Ensure port 5500 is available
- **MongoDB connection**: Verify `MONGO_URI` in `.env` file
- **Dependencies**: Run `npm install` after pulling changes

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as part of Burak Orkmez's MERN Stack crash course tutorial.

