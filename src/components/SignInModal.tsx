import { Component } from "solid-js";
import { useFirebaseApp } from "~/firebase/useFirebaseApp";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat";
import { Portal } from "solid-js/web";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

type Prop = {};

const SignInModal: Component<Prop> = () => {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new GoogleAuthProvider());

  return (
    <Portal>
      <div class="absolute left-[50%] gap-7 top-[50%] flex flex-col justify-center min-w-[400px] min-h-[200px] translate-x-[-50%] translate-y-[-50%] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
        <p class="text-xl font-bold tracking-tight text-gray-900 text-center">
          You are not logged in
        </p>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={signIn}
        >
          Sign in
        </button>
      </div>
    </Portal>
  );
};

export default SignInModal;
