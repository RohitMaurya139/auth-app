import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <StrictMode>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <UserProvider>
          <App />
        </UserProvider>
      </GoogleOAuthProvider>
    </StrictMode>
  </BrowserRouter>
);
