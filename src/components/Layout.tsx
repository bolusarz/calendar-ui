import { Component } from "solid-js";
import { FileRoutes, Head, Routes } from "solid-start";
import { useFirebaseApp } from "~/firebase/useFirebaseApp";
import { useAuth } from "~/firebase/useAuth";
import { getAuth } from "firebase/auth";
import SignInModal from "~/components/SignInModal";
import Header from "~/components/Header";

type Prop = {};

const Layout: Component<Prop> = () => {
  const app = useFirebaseApp();
  const state = useAuth(getAuth(app));

  return (
    <>
      <Header />
      {!state() && <SignInModal />}
      <main class="flex-grow h-full">
        <Routes>
          <FileRoutes />
        </Routes>
      </main>
    </>
  );
};

export default Layout;
