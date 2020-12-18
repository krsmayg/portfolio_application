import React from "react";
import classes from "./style.module.scss";
import {NavLink } from "react-router-dom";
import IosHomeOutline from "react-ionicons/lib/IosHomeOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import IosSettingsOutline from "react-ionicons/lib/IosSettingsOutline";
import IosEyeOutline from "react-ionicons/lib/IosEyeOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";

function NavBar() {
  return (
    <div className={classes.navbar}>
      <h1 style={{ textAlign: "center" }} className={classes.logo}>K</h1>
      <div className={classes.navLinks}>
        <div className={classes.item}>
          <NavLink exact to="/" activeClassName={classes.active}>
            <IosHomeOutline
              fontSize="30px"
              className={classes.iconLink}
              data-name="HOME"
            />
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink exact to="/about" activeClassName={classes.active}>
            <IosPersonOutline fontSize="30px" className={classes.iconLink} />
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink exact to="/skills" activeClassName={classes.active}>
            <IosSettingsOutline
              fontSize="30px"
              className={classes.iconLink}
              active
            />
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink exact to="/portfolio" activeClassName={classes.active}>
            <IosEyeOutline fontSize="30px" className={classes.iconLink} />
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink exact to="/contact" activeClassName={classes.active}>
            <IosMailOutline fontSize="30px" className={classes.iconLink} />
          </NavLink>
        </div>
      </div>
      <div className={classes.socialLinks}>
        <div className={classes.socialItem}>
          <LogoInstagram fontSize="18px" className={classes.socialLink} />
        </div>
        <div className={classes.socialItem}>
          <a href="https://github.com/krsmayg">
            <LogoGithub fontSize="18px" className={classes.socialLink} />
          </a>
        </div>
        <div className={classes.socialItem}>
          <LogoLinkedin fontSize="18px" className={classes.socialLink} />
        </div>
      </div>
    </div>
  );
}
//
export default NavBar;
