import React from "react";
import classes from "./style.module.scss";
import AdditionalTitle from "../../components/UI/Titles/AdditionalTitle";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {ButtonPrimary} from "../../components/UI/Buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function ContactPage() {
  const styles = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <AdditionalTitle label="Contact me" />
        <p className="text-box">
          Purposeful guy. Ready to contribute to team success through hard work,
          attention to detail and perseverance . Mostly clear understanding of
          different tasks. Motivated to learn, grow and excel in Web Industry.
        </p>
        <div className={styles.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className={classes.container}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={classes.input}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
            <div className={classes.container}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={classes.input}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
            <div className={classes.container}>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className={classes.input}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
            <div className={classes.container}>
                <textarea
                  type="text"
                  placeholder="Message"
                  name="message"
                  className={classes.textarea}
                />
              </div>
            </Grid>
          </Grid>
          <br />
          <ButtonPrimary label="Contact me" link="/contact" />
        </div>
      </div>
      <div className={classes.rightInfo}></div>
    </div>
  );
}

export default ContactPage;
{
  /* <input type="text" placeholder="Name" name="name" className={classes.input} style={{flexGrow: 1}} />
<input type="text" placeholder="Name" name="name" className={classes.input} style={{flexGrow: 1}} />
<input type="text" placeholder="Name" name="name" className={classes.input} style={{flexGrow: 3}} />
<input type="text" placeholder="Name" name="name" className={classes.input} style={{flexGrow: 1}} /> */
}
