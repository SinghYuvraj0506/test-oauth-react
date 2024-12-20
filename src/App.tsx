import { Auth0Provider, GoogleProvider } from "oauth-wrapper-lib/providers";
import "./App.css";
import OAuthClient from "oauth-wrapper-lib";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider, { ProtectedRoute } from "oauth-wrapper-lib/react";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

function App() {
  const google = new Auth0Provider({
    client_id: import.meta.env.VITE_AUTH_ID,
    handleCallback: () => {},
  },import.meta.env.VITE_AUTH0_DOMAIN);

  const client = new OAuthClient({
    providers: [google],
    successRedirectUrl: "/landing",
  });

  return (
    <BrowserRouter>
      <AuthProvider client={client}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute navigateTo="/landing" allowWhenUnauthenticated>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/landing"
            element={
              <ProtectedRoute navigateTo="/">
                <Landing />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
