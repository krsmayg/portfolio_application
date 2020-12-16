import React from "react";
import classes from "./style.module.scss";
import NavBar from "../../components/NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={classes.page}>
        <div className={classes.container}>
          <div className={`${classes.tag} ${classes.topTag}`}>
            <span>&lt;body&gt;</span>
          </div>
          <div className={classes.wrapper}>{children}</div>
          <div className={`${classes.tag} ${classes.bottomTag}`}>
            <span>&lt;/body&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
