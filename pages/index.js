import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import CarouselHome from "../src/components/CarouselHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sections from "../src/components/CardsHome";

function HomePage() {
  return (
    <>
      <CSSReset />
      <Menu/>
      <CarouselHome/>
      <Sections></Sections>
      {/* <div>Welcome to Next.js!</div> */}
    </>
  );
}

export default HomePage;
