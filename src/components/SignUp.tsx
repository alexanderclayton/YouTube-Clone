import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuth } from "../firebase/firebaseAuth";
import { FirebaseError } from "firebase/app";

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const openModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setModal(true);
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setModal(false);
  };

  const createAccount = async (): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Success!");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          setMessage("A user with that email address already exists!");
        } else if (error.code === "auth/invalid-email") {
          setMessage("Must enter a valid email!");
        } else if (error.code === "auth/weak-password") {
          setMessage("Password must contain at least 6 characters");
        } else {
          console.error(error.code as string);
          setMessage("Error creating user!");
        }
      }
    }
  };

  const createWithGoogle = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, googleAuth);
      console.log("Success!");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/popup-closed-by-user") {
          setMessage("Popup closed before signing in user!");
        } else {
          console.error(error.code as string);
          setMessage("Error signing in user!");
        }
      }
    }
  };

  return (
    <div>
      <button className="hover:text-retro-pink text-sm rounded bg-blue-500 px-4 pb-1 text-white hover:bg-blue-600 mb-2 ml-2" onClick={openModal}>Create Account</button>
      {modal && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="absolute flex flex-col rounded bg-white p-4 shadow-md">
          <button
              className="border border-black absolute -right-4 -top-4 rounded-full bg-gray-300 px-2 pb-1 hover:bg-gray-400"
              onClick={closeModal}
            >
              <span className="px-1 text-xl text-gray-700">x</span>
            </button>
            <input
              type="text"
              placeholder="Email..."
              onChange={handleEmailChange}
              value={email}
              className="mb-2 rounded border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
            <input
              type="password"
              placeholder="Password..."
              onChange={handlePasswordChange}
              value={password}
              className="mb-2 rounded border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
            <button
              onClick={createAccount}
              className="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Create Account
            </button>
            <button
              onClick={createWithGoogle}
              className="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Sign In With Google
            </button>
            <h1>{message}</h1>
          </div>
        </div>
      )}
    </div>
  );
};
