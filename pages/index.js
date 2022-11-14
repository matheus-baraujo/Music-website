import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";

function HomePage() {
  return (
    <>
      <CSSReset />
      <Menu/>
      {/* <div>Welcome to Next.js!</div> */}
    </>
  );
}

export default HomePage;
