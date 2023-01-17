import type { Auth, User } from "firebase/auth";
import { onIdTokenChanged } from "firebase/auth";
import { createSignal, onCleanup } from "solid-js";

export function useAuth(auth: Auth) {
  const [state, setState] = createSignal<User | null>(auth.currentUser);

  const unsub = onIdTokenChanged(
    auth,
    (authUser) => {
      setState(authUser);
    },
    (error) => {
      setState(null);
    }
  );

  onCleanup(unsub);

  return state;
}
