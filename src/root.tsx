// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Link,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { FirebaseProvider } from "~/firebase/FirebaseProvider";
import Layout from "~/components/Layout";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Google Calendar Clone</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0"
        />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <Link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Montserrat:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body class="h-[100vh] w-full lex flex-col">
        <Suspense>
          <ErrorBoundary>
            <FirebaseProvider>
              <Layout />
            </FirebaseProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
