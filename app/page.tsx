import AboutInfo from "@/marketing/ui/about";
import Experience from "@/marketing/ui/experience";
import LandingHero from "@/marketing/ui/landing-hero";
import PageFooter from "@/marketing/ui/page-footer";
import PageHeader from "@/marketing/ui/page-header";

export default function Home() {
  return (
    <main className="container max-w-screen-xl py-8 space-y-20" id="top">
      <PageHeader />
      <LandingHero />
      <Experience />
      <AboutInfo />
      <PageFooter />
    </main>
  );
}
