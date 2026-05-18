# KLAVIYO Clone

A full-stack web application that replicates the modern UI and core architecture of Klaviyo, the popular marketing automation and B2C CRM platform.

## 🚀 Features
- **Modern UI/UX**: Pixel-perfect replication of Klaviyo's homepage design, featuring responsive layouts, a responsive navbar, hero section, statistical banners, and feature showcases.
- **Dynamic Content**: Data is dynamically served from a backend database rather than hardcoded in the frontend.
- **RESTful API**: Node.js and Express backend providing a centralized API for fetching homepage data efficiently.
- **Database Seeding**: Easily seed your MongoDB database with placeholder marketing copy, testimonials, and feature sets.

## 💻 Tech Stack
- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB (Atlas / Local)

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster (or local MongoDB server)

### 1. Clone the repository
```bash
git clone https://github.com/SuryaKarthikeya/klaviyo-clone.git
cd klaviyo-clone
```

### 2. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/
   ```
   *Note: If using MongoDB Atlas, make sure to **whitelist your IP address** in the Network Access settings.*
4. Seed the database with initial data:
   ```bash
   npm run seed
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   *The server will run on http://localhost:5000.*

### 3. Frontend Setup
1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client will usually run on http://localhost:5173.*

## 📂 Project Structure
```text
klaviyo-clone/
├── client/              # React frontend (Vite)
│   ├── public/          # Static assets (images, logos, SVGs)
│   ├── src/             # React components and styles
│   └── package.json
└── server/              # Node.js + Express backend
    ├── config/          # Database configuration
    ├── controllers/     # Route handlers and logic
    ├── models/          # Mongoose database schemas
    ├── routes/          # Express API routes
    ├── seed/            # Scripts to populate the database
    └── package.json
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
