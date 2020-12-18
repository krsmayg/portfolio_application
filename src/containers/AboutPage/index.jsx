import React from "react";
import classes from "./style.module.scss";
import AdditionalTitle from "../../components/UI/Titles/AdditionalTitle";
import controllerSrc from "../../assets/svgs/controller.svg";
function AboutPage() {
  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <AdditionalTitle label="About me" />
        <p className={classes.textBox}>
          Purposeful guy. Ready to contribute to team success through hard work,
          attention to detail and perseverance . Mostly clear understanding of
          different tasks. Motivated to learn, grow and excel in Web Industry.
        </p>
        <p className={classes.textBox}>
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
      </div>
      <div className={classes.rightInfo}>
        <img src={controllerSrc} className={classes.icon} alt="controller"/>
      </div>
    </div>
  );
}

export default AboutPage;
