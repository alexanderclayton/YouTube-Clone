import { useState } from "react";
import { auth, googleAuth } from "../firebase/firebaseAuth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const openModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setModal(true);
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setModal(false);
  };

  const signIn = async (): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Success!");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/wrong-password") {
          setMessage("Incorrect Password!");
        } else if (error.code === "auth/user-not-found") {
          setMessage("No user with that email found!");
        } else if (error.code === "auth/invalid-email") {
          setMessage("Must enter a valid email!");
        } else {
          console.error(error.code as string);
          setMessage("Error signing in user!");
        }
      }
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
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
      <button onClick={openModal}>Sign In</button>
      {modal && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50">
          <div className=" flex flex-col rounded bg-white p-4 shadow-md">
          <button
              className="absolute top-2 right-2 bg-gray-300 px-2 pb-1 rounded-full hover:bg-gray-400"
              onClick={closeModal}
            >
              <span className="text-gray-700 text-xl">close</span>
            </button>
            <input
              type="text"
              placeholder="Email..."
              onChange={handleEmail}
              value={email}
              className="mb-2 rounded border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
            <input
              type="password"
              placeholder="Password..."
              onChange={handlePassword}
              value={password}
              className="mb-2 rounded border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
            <button
              onClick={signIn}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 mb-2"
            >
              Sign In
            </button>
            <button
              onClick={signInWithGoogle}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 mb-2"
            >
              Sign In With Google
            </button>
            <h2>{message}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
