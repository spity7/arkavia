import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Features from "@/components/homes/home-10/Features";
import Banner from "@/components/homes/home-3/Banner";
import { qualities } from "@/data/features";
const onePage = false;
const dark = false;
import { brutalistMultipage } from "@/data/menu";

import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Arkavia — Premium Wood Sawmill & Lumber Solutions",
  description:
    "Arkavia is a wood sawmill company delivering high‑quality lumber, precision cuts, and sustainable timber solutions.",
};

export default function BrutalistAboutPage() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header3 links={brutalistMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-20 pt-sm-40">
                <h1 className="hs-title-2 font-alt uppercase mb-0">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    <AnimatedText text="About Arkavia" />
                  </span>
                  <span
                    className="section-title-image wow fadeScaleIn"
                    data-wow-delay="0.3s"
                  >
                    <Image
                      src="/assets/images/demo-brutalist/shape-2.svg"
                      alt=""
                      width={35}
                      height={35}
                    />
                  </span>
                </h1>
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection pt-0 pb-0 ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="about"
            >
              <div className="container position-relative">
                <div className="row page-section relative z-index-1">
                  <div className="col-sm-9">
                    <p
                      className="section-descr-large mb-60 mb-sm-40 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Arkavia is a dedicated wood sawmill company focused on
                      delivering high-quality lumber, precision-cut timber, and
                      sustainable wood products. With decades of craftsmanship
                      behind us, we serve builders, manufacturers, and artisans
                      who rely on durable, responsibly sourced materials.
                    </p>
                    <ul
                      className="section-features font-alt clearlist uppercase wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      {qualities.map((quality, index) => (
                        <li key={index}>{quality}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Image */}
                <div
                  className="row section-image-1-wrap"
                  data-rellax-y=""
                  data-rellax-speed={1}
                  data-rellax-percentage="0.3"
                >
                  <div className="col-5 offset-7 col-sm-4 offset-sm-8">
                    <Image
                      src="/assets/images/demo-brutalist/Sawmill.jpg"
                      width={689}
                      height={855}
                      className="section-image-1"
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* End Image */}
              </div>
            </section>
            <section
              className="page-section bg-dark-1 bg-dark-alpha-70 light-content bg-scroll pb-0 z-index-1"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-brutalist/section-bg-2.jpg)",
              }}
            >
              <Banner />
            </section>

            <section
              className={`page-section overflow-hidden  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Features />
            </section>
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
