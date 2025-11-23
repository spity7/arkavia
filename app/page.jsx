import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Home3 from "@/components/homes/home-3";
import Hero1 from "@/components/homes/home-3/heros/Hero1";
import { brutalistMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Arkavia — Premium Wood Sawmill & Lumber Solutions",
  description:
    "Arkavia is a wood sawmill company delivering high‑quality lumber, precision cuts, and sustainable timber solutions.",
};

export default function Home3MainDemoMultiPage() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header3 links={brutalistMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section parallax-5 light-content scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>

            <Home3 />
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
