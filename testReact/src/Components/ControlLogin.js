import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function ControlLogin(props)
{
    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        getAccessTokenSilently,
      } = useAuth0();

     let button;

if(isAuthenticated)
{
    button = <LogoutButton></LogoutButton>
}
else
{
    button = <LoginButton></LoginButton>
}

return(
    
<div>
    {button}
</div>
    

);
}


//     handleLoginClick() {
//       this.setState({isLoggedIn: true});
//     }
//     handleLogoutClick() {
//       this.setState({isLoggedIn: false});
//     }
//     render() {
//       const isLoggedIn = this.state.isLoggedIn;
//       let button;
//       if (this.isAuthenticated) {
//         button = <LogoutButton />;
//       } else {
//         button = <LoginButton  />;
//       }
//       return (
//         <div>
//           {/* <Greeting isLoggedIn={isLoggedIn} /> */}
//           {button}
//         </div>
//       );
//     }
//   }

  export default ControlLogin;