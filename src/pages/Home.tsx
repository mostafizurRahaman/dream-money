import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import OverviewSection from "../components/OverviewSection/OverviewSection";
import PaymentSection from "../components/Payment/PaymentSection";
import Section from "../components/Section/Section";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Tilte from "../components/Title/Tilte";

const Home = () => {
   return (
      <>
         <Nav></Nav>
         <Banner></Banner>
         <Section>
            <Tilte>Why choose us</Tilte>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-20 gap-10 ">
               <ServiceCard></ServiceCard>
               <ServiceCard></ServiceCard>
               <ServiceCard></ServiceCard>
               <ServiceCard></ServiceCard>
               <ServiceCard></ServiceCard>
               <ServiceCard></ServiceCard>
            </div>
         </Section>
        <PaymentSection></PaymentSection>
        <OverviewSection></OverviewSection>
        <Footer></Footer>
      </>
   );
};

export default Home;
