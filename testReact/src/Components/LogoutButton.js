import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

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
      <Button onClick={logout}>
        Logout
      </Button>
    );
  }

  export default LogoutButton;