import React, { useContext, useRef } from "react";
import * as Yup from "yup";
import Box from "@material-ui/core/Box";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Header from "./Header";

const styles = {
  inputField: {
    textAlign: "left",
  },
};

function LicenceForm(props) {
  const { classes } = props;

  function clearForm() {
    formik.resetForm();
    formik.setFieldValue("licenceField", "");
  }

  function layoutForm() {
    return (
      <React.Fragment>
        <Grid container direction="horizontal">
          <Box m={1} p={1}>
            <TextField
              className={classes.inputField}
              id="outlined-basic"
              name="licenceField"
              label="Licence number"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.licenceField}
            />
            {formik.touched.licenceField && formik.errors.licenceField ? (
              <div style={{ color: "red", marginTop: 8 }}>
                {formik.errors.licenceField}
              </div>
            ) : null}
          </Box>
          <Box m={1} p={1}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<ArrowForward />}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid container direction="horizontal">
          <Box m={1} p={1}>
            <Button
              className={classes.inputField}
              onClick={clearForm}
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<Clear />}
            >
              Clear form
            </Button>
          </Box>
        </Grid>
        <Grid container direction="horizontal">
          <Box m={1} p={1}>
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }

  const formik = useFormik({
    initialValues: {
      licenceField: "",
    },
    validationSchema: Yup.object({
      licenceField: Yup.string().url().required("Required"),
    }),
    onSubmit: (values) => {
      values.baseUrl = window.location.host + "/";
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>{layoutForm()}</form>
    </React.Fragment>
  );
}

export default withStyles(styles)(LicenceForm);
