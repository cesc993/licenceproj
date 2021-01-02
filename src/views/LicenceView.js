import React, { useContext } from "react";
import Header from "../components/Header";
import Snackbar from "@material-ui/core/Snackbar";
import LicenceForm from "../components/LicenceForm";

function LicenceView() {
  return (
    <React.Fragment>
      <Header />
      <LicenceForm />
    </React.Fragment>
  );
}

export default LicenceView;
