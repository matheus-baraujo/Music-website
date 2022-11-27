import config from "../config.json";

import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import CarouselHome from "../src/components/CarouselHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsHome from "../src/components/CardsHome";
import ContactForm from "../src/components/ContactForm";

function HomePage() {
  return (
    <>
      <CSSReset />
      <Menu/>
      <CarouselHome/>
      <CardsHome />
      <ContactForm />
    </>
  );
}

export default HomePage;
