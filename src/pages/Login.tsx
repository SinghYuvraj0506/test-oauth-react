import { useAuth } from "oauth-wrapper-lib/react";

const Login = () => {
  const { loginFn } = useAuth();
  if (!loginFn) {
    return null;
  }
  return (
    <div>
      Login
      <button
        onClick={() => {
          loginFn("auth0");
        }}
      >
        Login Now with Auth0
      </button>
    </div>
  );
};

export default Login;
