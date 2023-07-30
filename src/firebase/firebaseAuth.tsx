import { app } from "./firebaseConfig";
import { getAuth, GoogleAuthProvider, Auth} from "firebase/auth";

export const auth: Auth = getAuth(app);

export const googleAuth = new GoogleAuthProvider().setCustomParameters({
    prompt: "select_account",
});