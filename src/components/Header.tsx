import Logo from "../assets/react.svg"
import { Navbar } from "./Navbar";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Logout } from "./Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseAuth";

export const Header: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-gray-400 h-screen flex justify-between pt-4 px-4">
        <div className="pt-2">
            <img src={Logo} alt="react-icon" />
        </div>
        <div>
        <Navbar />
        </div>
      <div>
        {!user ? (
          <div className="flex justify-between">
            <SignIn />
            <SignUp />
          </div>
        ) : (
          <Logout />
        )}
      </div>
    </div>
  );
};
