import { useAuth } from 'oauth-wrapper-lib/react';

const Landing = () => {
    const { isAuthenticated, user } = useAuth();

    console.log("data",isAuthenticated, user)

  return (
    <div>Landing page</div>
  )
}

export default Landing