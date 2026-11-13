import About from "./_components/home/About";
import Book from "./_components/home/Book";
import Community from "./_components/home/Community";
import GatheringsIndex from "./_components/home/GatheringsIndex";
import GoiCuon from "./_components/home/GoiCuon";
import Hero from "./_components/home/Hero";
import { LightboxProvider } from "./_components/home/Lightbox";
import SiteFooter from "./_components/home/SiteFooter";
import SiteHeader from "./_components/home/SiteHeader";
import TcmDinner from "./_components/home/TcmDinner";
import { Hearts } from "./_components/home/ui";

export default function Home() {
  return (
    <LightboxProvider>
      <div className="gl-root bg-cream text-ink">
        <SiteHeader />
        <main id="main-content">
          <Hero />
          <GatheringsIndex />
          <TcmDinner />
          <div aria-hidden="true" className="flex justify-center pb-11 lg:pb-[72px]">
            <Hearts width={72} className="lg:hidden" />
            <Hearts width={64} className="hidden lg:block" />
          </div>
          <GoiCuon />
          <Community />
          <Book />
          <About />
        </main>
        <SiteFooter />
      </div>
    </LightboxProvider>
  );
}
