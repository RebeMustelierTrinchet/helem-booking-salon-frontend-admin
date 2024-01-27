import MainNavbar from "../navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../pages/credentials/login"


export default function Layout({ children }) {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return isAuthenticated ?(
    <div>
      <div>
        <MainNavbar />
      </div>
      <div>{children}</div>
      <div></div>
    </div>
  ): ( <LoginButton />);
}
