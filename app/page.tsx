// page.tsx
import Banner from "@/components/home/Banner";
import Content from "@/components/home/Content";
import PartnersSection from "@/components/home/PartnersSection";
import TeamSection from "@/components/home/Team";

export default function Home() {
  return (
    <>
    <Banner/>
    <Content/>
    <TeamSection/>
    <PartnersSection/>
    </>
  );
}