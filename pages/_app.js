import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <CSSReset />
        <Menu />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
