import PageFooter from "./ui/components/page-footer";
import PageHeader from "./ui/components/page-header";
import AboutInfo from "./ui/sections/about";
import Experience from "./ui/sections/experience";
import LandingHero from "./ui/sections/landing-hero";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:opacity-15 [background-size:16px_16px]" />
      <main className="container py-8 space-y-20" id="top">
        <PageHeader />
        <LandingHero />
        <Experience />
        <AboutInfo />
        <PageFooter />
      </main>
    </>
  );
}
