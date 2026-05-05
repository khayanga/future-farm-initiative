
import Banner from "@/components/home/Banner";
import Content from "@/components/home/Content";
import FarmersHope from "@/components/home/FarmersHope";
import PartnersSection from "@/components/home/PartnersSection";
import TeamSection from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import ThemeBanner from "@/components/home/ThemeBannner";

export default function Home() {
  return (
    <main >
    <Banner/>
    <Content/>

    <ThemeBanner/>
    <TeamSection/>
    <FarmersHope/>
    <Testimonials/>
    <PartnersSection/>
    
    </main>
  );
}