import Introduction from "./components/introduction";
import Jobs from "./components/jobs";
import Header from "./components/header";
import Clients from "./components/clients";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative snap-mandatory scroll-smooth snap-x">
        <Introduction />
        <Jobs />
        <Clients />
        <Contact />
      </section>
    </>
  );
}
