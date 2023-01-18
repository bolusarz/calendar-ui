import { Component } from "solid-js";
import { FileRoutes, Head, Routes } from "solid-start";
import { useFirebaseApp } from "~/firebase/useFirebaseApp";
import { useAuth } from "~/firebase/useAuth";
import { getAuth } from "firebase/auth";
import SignInModal from "~/components/SignInModal";
import Header from "~/components/Header";
import { CalendarProvider } from "~/calendar/CalendarProvider";

type Prop = {};

const Layout: Component<Prop> = () => {
  const app = useFirebaseApp();
  const state = useAuth(getAuth(app));

  return (
    <CalendarProvider>
      <Header />
      {!state() && <SignInModal />}
      <main class="flex-grow h-full">
        <Routes>
          <FileRoutes />
        </Routes>
      </main>
    </CalendarProvider>
  );
};

export default Layout;
