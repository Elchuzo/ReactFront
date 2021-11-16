import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(props) {
    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        getAccessTokenSilently,
      } = useAuth0();

    return (
      <button onClick={logout}>
        Logout
      </button>
    );
  }

  export default LogoutButton;