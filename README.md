# Authentication System with React + MongoDB

A complete authentication system with login and registration functionality using React, Express, and MongoDB.

## Features

- User Registration with validation
- User Login with JWT authentication
- Password hashing with bcrypt
- Beautiful, modern UI with gradient design
- Protected dashboard
- Persistent login (localStorage)
- MongoDB database integration

## Prerequisites

- Node.js (v20+)
- npm or yarn
- MongoDB Atlas account (already configured)

## Installation & Setup

### 1. Install all dependencies:

```bash
npm install
```

### 2. Install backend dependencies:

```bash
cd server
npm install
cd ..
```

## Running the Application

### Option 1: Run both servers together (Recommended)

```bash
npm start
```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:5000

### Option 2: Run servers separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Project Structure

```
terf/
├── server/              # Backend code
│   ├── models/         # MongoDB models
│   │   └── User.js     # User model with password hashing
│   ├── routes/         # API routes
│   │   └── auth.js     # Authentication routes
│   ├── .env            # Environment variables
│   ├── server.js       # Express server
│   └── package.json    # Backend dependencies
├── src/                # Frontend code
│   ├── components/     # React components
│   │   ├── Login.jsx   # Login form
│   │   ├── Register.jsx # Registration form
│   │   ├── Dashboard.jsx # User dashboard
│   │   └── Auth.css    # Authentication styles
│   └── App.jsx         # Main app component
└── package.json        # Frontend dependencies
```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

## Usage

1. Open http://localhost:5173 in your browser
2. Register a new account with username, email, and password
3. Login with your credentials
4. View your dashboard with user information
5. Logout when done

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Protected routes
- Input validation
- CORS enabled

## Database

MongoDB Atlas connection is pre-configured. The connection string is in `server/.env`

## Notes

- Frontend runs on port 5173 (Vite default)
- Backend runs on port 5000
- JWT tokens expire after 7 days
- Passwords must be at least 6 characters

---

## 🚀 Production Deployment

### Environment Variables

**Frontend (.env.local in root):**
```env
VITE_API_URL=https://your-backend-url.com
```

**Backend (server/.env):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://haufe:Cl0fb2RqQOz1qfhf@cluster0.nredtp0.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=https://your-frontend-url.com
```

### Deploy Backend (Railway)
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repo
3. Set root directory: `server`
4. Add env vars: MONGODB_URI, JWT_SECRET, FRONTEND_URL
5. Deploy

### Deploy Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Add env var: VITE_API_URL (your Railway URL)
4. Deploy

### Security
⚠️ Change JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

⚠️ MongoDB Atlas: Allow access from 0.0.0.0/0 in Network Access

---

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
