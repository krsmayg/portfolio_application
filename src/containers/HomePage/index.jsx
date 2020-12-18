import React from 'react';
import HomeTitle from '../../components/UI/Titles/HomeTitle';
import classes from "./style.module.scss";
import {ButtonPrimary} from "../../components/UI/Buttons";
import CustomLogo from '../../components/UI/CustomLogo';

function HomePage() {
  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <HomeTitle />
        <br />
        <ButtonPrimary label="Contact me" link="/contact" />
      </div>
      <div className={classes.rightInfo}>
        <CustomLogo />
      </div>
    </div>
   
  );
}
 
export default HomePage;