import React from 'react';
import classes from './style.module.scss';
import {Link} from 'react-router-dom';
import IosHomeOutline from 'react-ionicons/lib/IosHomeOutline';
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline';
import IosSettingsOutline from 'react-ionicons/lib/IosSettingsOutline';
import IosEyeOutline from 'react-ionicons/lib/IosEyeOutline';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';

const NavBar = () => {
  return ( 
    <div className={classes.navbar}>
      <h1 style={{textAlign: 'center'}}>K</h1>
      <div className={classes.navLinks}>
        <div className={classes.item}>
          <IosHomeOutline fontSize="30px" className={classes.iconLink}/>
        </div>
        <div className={classes.item}>
          <IosPersonOutline fontSize="30px" className={classes.iconLink}/>
        </div>
        <div className={classes.item}>
          <IosSettingsOutline fontSize="30px" className={classes.iconLink}/>
        </div>
        <div className={classes.item}>
          <IosEyeOutline fontSize="30px" className={classes.iconLink}/>
        </div>
        <div className={classes.item}>
          <IosMailOutline fontSize="30px" className={classes.iconLink}/>
        </div>
      </div>
      <div className={classes.socialLinks}>
        <div className={classes.socialItem}>
          <LogoInstagram fontSize="18px" className={classes.socialLink} />
        </div>
        <div className={classes.socialItem}>
          <LogoGithub fontSize="18px" className={classes.socialLink} />
        </div>
        <div className={classes.socialItem}>
          <LogoLinkedin fontSize="18px" className={classes.socialLink} />
        </div>
      </div>
    </div>
   );
}
 
export default NavBar;