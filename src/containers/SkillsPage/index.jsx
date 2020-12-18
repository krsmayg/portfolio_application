import React from 'react';
import classes from "./style.module.scss";
import AdditionalTitle from "../../components/UI/Titles/AdditionalTitle";
import SkillsChart from "../../components/SkillsChart"
function SkillsPage() {
  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <AdditionalTitle label ="Skills Page" />
        <br />
      </div>
      <div className={classes.rightInfo}>
        <SkillsChart/>
      </div>
    </div>
   
  );
} 
export default SkillsPage;