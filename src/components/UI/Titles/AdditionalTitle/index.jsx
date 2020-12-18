import React from 'react';
import classes from "./style.module.scss";
const AdditionalTitle = ({label}) => {
  return ( 
    <h1 className={classes.title}>{label}</h1>
   );
}


export default AdditionalTitle;