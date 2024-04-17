import PageFooter from "./ui/components/page-footer";
import PageHeader from "./ui/components/page-header";
import AboutInfo from "./ui/sections/about";
import Experience from "./ui/sections/experience";
import LandingHero from "./ui/sections/landing-hero";

export default function Home() {
  return (
    <main className="container py-8 space-y-20" id="top">
      <PageHeader />
      <LandingHero />
      <Experience />
      <AboutInfo />
      <PageFooter />
    </main>
  );
}
