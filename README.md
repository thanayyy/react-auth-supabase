# React Auth Supabase

A simple React application that demonstrates user authentication using Supabase. This project includes sign-up, sign-in functionality, a protected dashboard, and private routing.

## Features

- User registration and login
- Protected routes for authenticated users
- Dashboard for logged-in users
- Responsive UI with Tailwind CSS

## Prerequisites

- Node.js (version 16 or higher)
- A Supabase account (sign up at [supabase.com](https://supabase.com))

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-auth-supabase
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Setup

1. Create a new project in Supabase.

2. Go to your project's API settings and copy the following:
   - Project URL
   - Anon public key

3. Open `src/supabaseClient.js` and replace the placeholders with your actual Supabase URL and anon key:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL';
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
   ```

## Running the Application

Start the development server:
```
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Building for Production

To build the app for production:
```
npm run build
```

Preview the production build:
```
npm run preview
```

## Project Structure

- `src/App.jsx`: Main application component
- `src/router.jsx`: Routing configuration
- `src/components/`: Reusable components (Signin, Signup, Dashboard, PrivateRoute)
- `src/context/AuthContext.jsx`: Authentication context provider
- `src/supabaseClient.js`: Supabase client configuration

## Technologies Used

- React 19
- Vite
- Supabase
- React Router DOM
- Tailwind CSS 4

## Troubleshooting

- Ensure your Supabase project is set up correctly and the keys are accurate.
- If you encounter build issues, try clearing the node_modules and reinstalling: `rm -rf node_modules && npm install`
- For linting issues, run `npm run lint` to check for errors.

## License

This project is for educational purposes. Feel free to modify and use as needed.
