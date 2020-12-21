import React from "react";
import classes from "./style.module.scss";
import AdditionalTitle from "../../components/UI/Titles/AdditionalTitle";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonSecondary } from "../../components/UI/Buttons";
import CustomMap from "../../components/CustomMap";
import GoogleMapCustom from "../../components/GoogleMapCustom";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import {useToasts } from 'react-toast-notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const token = "AIzaSyCFWJnLVOn5sqrzPKTMD-I5jK-omo7YiJg";
function ContactPage() {
  const { addToast } = useToasts();
  const styles = useStyles();
  const initialValues = {
    email: "",
    name: "",
    message: "",
    subject: "",
  };
  const onSubmit = (values) => {
    // console.log("Formik data: ", values)
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    name: Yup.string()
      .required("Required")
      .min(2, "name is too short - should be 2 chars minimum."),
    message: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const handleDataSending = (data) => {
    if (Object.keys(formik.errors).length === 0 && formik.values.name !== "") {
      emailjs
        .send(
          "service_2xft30u",
          "template_l97fclr",
          data,
          "user_8oZUjAyLcjF25ug2kMuZT"
        )
        .then(
          (result) => {
            addToast('meassage sent', { appearance: 'success' });
          },
          (error) => {
            addToast(error.text, { appearance: 'error' });
          }
        );
    }
  };
  return (
    <div className={classes.section}>
      <div className={classes.leftInfo}>
        <AdditionalTitle label="Contact me" />
        <p className="text-box">
         Here you can easily contact with me. Google Maps now is not free :(
        </p>
        <form onSubmit={formik.handleSubmit} className={styles.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className={classes.container}>
                <input
                  {...formik.getFieldProps("name")}
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={`${classes.input} ${
                    formik.touched.name && formik.errors.name
                      ? classes.inputError
                      : classes.input
                  } `}
                />
                <div className={classes.blank}></div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.container}>
                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={`${classes.input} ${
                    formik.touched.email && formik.errors.email
                      ? classes.inputError
                      : classes.input
                  } `}
                />
                <div className={classes.blank}></div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.container}>
                <input
                  {...formik.getFieldProps("subject")}
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className={`${classes.input} ${
                    formik.touched.subject && formik.errors.subject
                      ? classes.inputError
                      : classes.input
                  } `}
                />
                <div className={classes.blank}></div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.container}>
                <textarea
                  {...formik.getFieldProps("message")}
                  type="text"
                  placeholder="Message"
                  name="message"
                  className={`${classes.textarea} ${
                    formik.touched.message && formik.errors.message
                      ? classes.inputError
                      : classes.textarea
                  } `}
                />
                <div className={classes.blank}></div>
              </div>
            </Grid>
          </Grid>
          <br />
          <ButtonSecondary
            label="Send"
            fn={() => handleDataSending(formik.values)}
          />
        </form>
      </div>
      <div className={classes.rightInfo}>
        {/* <CustomMap /> */}
        <GoogleMapCustom
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCFWJnLVOn5sqrzPKTMD-I5jK-omo7YiJg`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className={classes.map} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default ContactPage;
