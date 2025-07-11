//this fine wraps all pages to show, for example the menu, everywhere.

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css"; // you should already have this

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}