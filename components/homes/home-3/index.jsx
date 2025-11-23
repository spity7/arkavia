import React from "react";

import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import Link from "next/link";
import ContactDark from "./ContactDark";
import Image from "next/image";
import { qualities } from "@/data/features";
import AnimatedText from "@/components/common/AnimatedText";

export default function Home3({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection pt-0 pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row page-section relative z-index-1">
            <div className="col-sm-9">
              <h2 className="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="About Arkavia" />
                </span>
              </h2>
              <p
                className="section-descr-large mb-60 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Arkavia is a dedicated wood sawmill company focused on
                delivering high-quality lumber, precision-cut timber, and
                sustainable wood products. With decades of craftsmanship behind
                us, we serve builders, manufacturers, and artisans who rely on
                durable, responsibly sourced materials.
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
                src="/assets/images/demo-brutalist/section-image-1.jpg"
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
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative pt-100 pt-md-70 pt-sm-50">
          <div className="row mb-80 mb-md-50">
            <div className="col-md-5">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="Services" />
                </span>
              </h2>
            </div>
            <div className="col-md-7">
              <p className="section-descr-large mb-0 wow fadeInUp">
                At Arkavia, we provide high‑quality lumber processing solutions
                using
                <span className="mark-decoration-2"> precision milling</span>,
                sustainable sourcing, and advanced wood treatment methods.
              </p>
            </div>
          </div>
          <Services />
        </div>
      </section>
      <hr className="mt-0 mb-0" />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row mb-100 mb-md-80 mb-sm-40">
            <div className="col-md-8 col-lg-9 mb-sm-30">
              <h2 className="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  Selected Projects
                </span>
                <span
                  className="section-title-image wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <Image
                    src="/assets/images/demo-brutalist/shape-1.svg"
                    width={35}
                    height={35}
                    alt=""
                  />
                </span>
              </h2>
              <p className="section-descr-large mb-0 wow fadeInUp">
                Explore a curated selection of our{" "}
                <span className="mark-decoration-2">timber craftsmanship</span>,
                milling work, and large-scale wood processing projects. From
                precise custom cuts to sustainable lumber supply, Arkavia
                delivers quality trusted by builders, artisans, and
                manufacturers.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 text-end pt-20 pt-md-10 pt-sm-0 local-scroll">
              {/* brutalist-portfolio */}
              {onePage ? (
                <>
                  <a
                    href="#contact"
                    className="link-hover-anim align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      Get in touch{" "}
                      <i
                        className="icon-arrow-right size-14"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      Get in touch{" "}
                      <i
                        className="icon-arrow-right size-14"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href={`/brutalist-portfolio${dark ? "-dark" : ""}`}
                    className="link-hover-anim align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      See all Projects{" "}
                      <i
                        className="icon-arrow-right size-14"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      See all Projects{" "}
                      <i
                        className="icon-arrow-right size-14"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Portfolio Grid */}
          <Portfolio />

          {/* End Portfolio Grid */}
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container position-relative">
          <div className="row mb-80 mb-md-50">
            <div className="col-md-5">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  Contact
                </span>
              </h2>
            </div>
            <div className="col-md-7">
              <p className="section-descr-large mb-0 wow fadeInUp">
                We’re always ready to connect with
                <span className="mark-decoration-2">good partners</span>. Reach
                out and let’s build something strong together.
              </p>
            </div>
          </div>
          {dark ? <ContactDark /> : <Contact />}
        </div>
      </section>
    </>
  );
}
