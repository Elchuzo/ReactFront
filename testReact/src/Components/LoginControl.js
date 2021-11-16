import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
      
    //   const {
    //     loginWithPopup,
    //     loginWithRedirect,
    //     logout,
    //     user,
    //     isAuthenticated,
    //     getAccessTokenSilently,
    //   } = useAuth0();

    }


    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (this.isAuthenticated) {
        button = <LogoutButton />;
      } else {
        button = <LoginButton  />;
      }
      return (
        <div>
          {/* <Greeting isLoggedIn={isLoggedIn} /> */}
          {button}
        </div>
      );
    }
  }

  export default LoginControl;