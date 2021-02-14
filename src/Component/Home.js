import React from "react";
import Typed from "react-typed";
import { homeFlex } from "./MenuItems";

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="home__wrapper container">
          <h1>Welcome to nolem properties</h1>
          <Typed
            className="typed-text"
            strings={[
              "Nigeria's No 1 real estate company",
              "Tested and Trusted for over 10yrs",
              "We buy and sell properties",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
      <div className="home__flex container">
        {homeFlex.map((homes, index) => {
          return (
            <div className="home__item" key={index}>
              <div className="home__icon">{homes.icon}</div>
              <h2>{homes.title}</h2>
              <p>{homes.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
