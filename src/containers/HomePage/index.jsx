import React from 'react';
import HomeTitle from '../../components/UI/Titles/HomeTitle';
import classes from "./style.module.scss";
import {ButtonPrimary} from "../../components/UI/Buttons"
function HomePage() {
  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <HomeTitle />
        <br />
        <ButtonPrimary label="Contact me" link="/contact" />
      </div>
    </div>
   
  );
}
 
export default HomePage;