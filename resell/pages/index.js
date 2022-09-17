import Features from "../Components/Features/Features";
import TicketSection from "../Components/TicketSection/TicketSection";
import Header from "../Components/UI/Header/Header";
import Navbar from "../Components/UI/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <TicketSection />
      <Features />
    </>
  );
}
