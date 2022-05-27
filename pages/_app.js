import "../styles/globals.css";
import HeadForFont from "./components/HeadForFont";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadForFont />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
