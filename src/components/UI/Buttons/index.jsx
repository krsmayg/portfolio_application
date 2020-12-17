import React from 'react';
import classes from "./style.module.scss";
import {useHistory} from 'react-router-dom'
export const ButtonPrimary = ({label, link}) => {
  const history = useHistory();
  return ( 
    <button className={`${classes.btn} ${classes.primaryBtn}`} onClick={() => history.push(link)} >
      <span>{label}</span>
    </button>
   );
}

export const ButtonSecondary = ({label}) => {
  return ( 
    <button className={`${classes.btn} ${classes.primaryBtn}`}>
      <span>{label}</span>
    </button>
   );
}
 
