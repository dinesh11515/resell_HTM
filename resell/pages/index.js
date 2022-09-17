import Features from "../Components/Features/Features";
import TicketSection from "../Components/TicketSection/TicketSection";
import Header from "../Components/UI/Header/Header";
import Footer from "../Components/UI/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <TicketSection />
      <Features />
      <Footer />
    </>
  );
}
