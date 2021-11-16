import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(props) {
    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        getAccessTokenSilently,
      } = useAuth0();

    return (
      <button onClick={loginWithRedirect}>
        Login
      </button>
    );
  }

  export default LoginButton;