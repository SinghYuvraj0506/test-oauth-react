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
          loginFn("google");
        }}
      >
        Login Now with google
      </button>
    </div>
  );
};

export default Login;
