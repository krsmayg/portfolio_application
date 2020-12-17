import React from "react";
import classes from "./style.module.scss";
function HomeTitle() {
  const parseStringAndRender = (lab) => {
    // eslint-disable-next-line no-new-wrappers
    const [...str] = lab;
    let cl = classes.item;
    return str.map((el, index) => (
      <span className={cl} key={index}>
        {el}
      </span>
    ));
  };
  parseStringAndRender("Kirya");
  return (
    <>
      <h1
        aria-label="
      Hi,
      I'm Kyryll, web developer
      "
        className={classes.title}
      >
        {parseStringAndRender("Hi")}
        <span className={classes.item}>,</span>
        <br />
        {parseStringAndRender("I’m")}
        &nbsp;
        {parseStringAndRender("Kyryll,")}
        <br />
        {parseStringAndRender("web")}
        &nbsp;
        {parseStringAndRender("developer.")}
      </h1>
      <h2 className={classes.subTitle}>Full stack Developer</h2>
    </>
  );
}

export default HomeTitle;
