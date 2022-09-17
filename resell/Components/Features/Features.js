import React from "react";
import classes from "./Features.module.css";
import Feature from "../UI/Feature/Feature";
import { FaVirus } from "react-icons/fa";
import { BsImage, BsHeart, BsQuestion } from "react-icons/bs";

const features = [
  {
    icon: <BsImage />,
    title: "Fast to sell",
    subtitle:
      "You just need to upload some few details and let us do the rest, and after it sold we will give you the money!! Easyy peassyy.",
  },

  {
    icon: <BsHeart />,
    title: "Easy to Buy",
    subtitle:
      "Just simply click on buy and enter the amount, and done. You just have to wait for a minute until everything is sorted inside the system.",
  },

  {
    icon: <BsQuestion />,
    title: "You are Anonymous",
    subtitle: "Keep your identity secret with everyone with the cutting edge blockchain technology",
  },
];

const Features = () => {
  return (
    <section className={classes.features}>
      <div className={classes.container}>
        <div className={classes.top}>
          <h3>
            Why choosing Resell. as a primary reselling platform is a good idea?
          </h3>
          <div className={classes.feature}>
            <Feature
              icon={<FaVirus />}
              title="Highly Secured"
              subtitle="Multiple layer of security, will ensure that your every transaction is secured from unexpected intruder"
            />
          </div>
        </div>
        <div className={classes.bottom}>
          {features.map((feature) => (
            <Feature
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
