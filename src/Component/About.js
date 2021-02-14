import React from "react";
import ng from "./Image/Ngozi.jpg";
import { aboutShowcase } from "./MenuItems";

const About = () => {
  return (
    <section className="about">
      <div className="about__info container">
        <h1>About Us</h1>
        <div className="underline"></div>
        <div className="about__flex">
          <div className="about__flexLeft">
            <img src={ng} alt="smiling lady" />
          </div>
          <div className="about__flexRight">
            <p>
              We are a reputable real estate marketing firm of professionals.
              Building relationship with our clients while providing real estate
              services with a philosophy of continous improvement in quality of
              services. Technology advances and efficient results.
            </p>
            <p>
              With our unbeatable level of expertise in property investment, we
              are an automatic choice for most investors, we are the housing
              solution provider in Nigeria.
            </p>
            <p>
              We use a unique contemporary style and total passion in bringing
              out choice properties, we provide the ultimate real estate
              experience for today's modern investor.
            </p>
            <p>
              We are not confined by traditional real estate boundaries when it
              comes to development, buying, selling, finding new and innovative
              ways to satisfy our clients needs and be at forefront of the
              Nigerian real estate market.
            </p>
          </div>
        </div>
      </div>
      <div className="about__showcase">
        <div className="showcase__wrapper ">
          <h2 className="h2">Why Choose Us</h2>
          <div className="underline"></div>
          <div className="chooseUs">
            <p>
              Intergrity + Professionalism + Continous Development +
              Accountability
            </p>
          </div>
          <div className="showcase__flex">
            {aboutShowcase.map((about, index) => {
              return (
                <div className="showcase__flexItem" key={index}>
                  <h3>{about.title}</h3>
                  <div className="underlines"></div>
                  <p>{about.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
