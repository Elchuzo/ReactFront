import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

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
      <Button variant="light" onClick={loginWithRedirect}>
        Login
      </Button>
    );
  }

  export default LoginButton;