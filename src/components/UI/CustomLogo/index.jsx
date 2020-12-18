import React from 'react';
import classes from "./style.module.scss";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

const CustomLogo = () => {
  return ( 
    <div className={classes.container}>
      <IosArrowBack fontSize="250px" className={`${classes.icon} ${classes.leftIcon}`} />
      <IosArrowForward fontSize="250px" className={`${classes.icon} ${classes.rightIcon}`} />
    </div>
  );
}
 
export default CustomLogo;