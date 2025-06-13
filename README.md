# ProductBox Frontend Code Challenge

A full-stack e-commerce application built with React, Express, and Material-UI. This project demonstrates a modern web application with features like product browsing, cart management, and responsive design.

## Features

- 🛍️ Product browsing with search and sort functionality
- 🛒 Shopping cart management
- 🔍 Real-time search filtering
- 🎨 Modern and clean user interface
- 🔄 Redux state management
- 🚀 Fast development with Vite

## Tech Stack

### Frontend

- React 19
- Material-UI (MUI)
- Redux Toolkit
- React Router
- Vite
- ESLint

### Backend

- Express.js
- CORS
- Winston (Logging)
- Body Parser

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Backend Setup

1. Install dependencies:

```bash
npm install
```

2. Start the backend server:

```bash
npm start
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd static/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend development server will run on `http://localhost:5173`

## Project Structure

```
├── static/
│   └── frontend/           # Frontend React application
│       ├── src/
│       │   ├── components/ # Reusable UI components
│       │   ├── screens/    # Page components
│       │   ├── features/   # Redux slices
│       │   └── api/        # API integration
│       └── public/         # Static assets
├── routes/                 # Backend API routes
├── lib/                    # Backend utilities
└── index.js               # Backend entry point
```

## Available Scripts

### Backend

- `npm start` - Start the backend server

### Frontend

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Product Browsing

- View all available products in a grid layout
- Search products by name
- Sort products by:
  - Price (High to Low)
  - Price (Low to High)
  - Name (A to Z)

### Add Items

- Add items to the Items List

### Shopping Cart

- Add items to cart
- View cart contents
- Real-time cart updates
- Persistent cart state using Redux
