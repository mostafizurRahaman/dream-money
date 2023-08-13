import OverviewCard from "../OverviewCard/OverviewCard";
import Section from "../Section/Section";
import Tilte from "../Title/Tilte";

const OverviewSection = () => {
   return (
      <>
         <Section>
            <Tilte>Overview</Tilte>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
               <OverviewCard countEnd={20} title="Total Job Post"></OverviewCard>
               <OverviewCard countEnd={50} title="Completed Job"></OverviewCard>
               <OverviewCard countEnd={30} title="Registered Users"></OverviewCard>
            </div>
         </Section>
      </>
   );
};

export default OverviewSection;
