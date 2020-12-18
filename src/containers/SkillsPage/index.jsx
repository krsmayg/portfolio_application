import React from "react";
import classes from "./style.module.scss";
import AdditionalTitle from "../../components/UI/Titles/AdditionalTitle";
import SkillsChart from "../../components/SkillsChart";
function SkillsPage() {
  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <AdditionalTitle label="Skills Page" />
        <p className="text-box">
          The main area of my expertise is front end development (client side of
          the web).
        </p>
        <p className="text-box">
          HTML, CSS, JS (TypeScript), building small and medium web apps with
          React and Redux(if necessarily), features, animations.
        </p>
        <br />
      </div>
      <div className={classes.rightInfo}>
        <SkillsChart />
      </div>
    </div>
  );
}
export default SkillsPage;
