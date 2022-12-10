import config from "../config.json";

import CarouselHome from "../src/components/CarouselHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsHome from "../src/components/CardsHome";
import ContactForm from "../src/components/ContactForm";

function HomePage() {
  return (
    <>
      <CarouselHome/>
      <CardsHome />
      <ContactForm />
    </>
  );
}

export default HomePage;
