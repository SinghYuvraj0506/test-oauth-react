import { useAuth } from 'oauth-wrapper-lib/react';

const Landing = () => {
    const { isAuthenticated, user, logout } = useAuth();

    console.log("data of user is",isAuthenticated, user)

  return (
    <div>
      Hello, {user?.name}

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Landing