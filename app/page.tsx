
import Banner from "@/components/home/Banner";
import Content from "@/components/home/Content";
import PartnersSection from "@/components/home/PartnersSection";
import TeamSection from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main >
    <Banner/>
    <Content/>
    <TeamSection/>
    <Testimonials/>
    <PartnersSection/>
    </main>
  );
}