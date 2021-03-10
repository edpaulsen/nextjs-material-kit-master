import React,{ Component }  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";


import { Flex, Box, Text, Heading } from "rebass";
import styled from "styled-components";
//import logo from "./logo.svg";
import { FormComponent, FormContainer } from "react-authorize-net";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function AuthSection() {
  const classes = useStyles();
  return (
    <Box className="App" p={3}>
      <Header />
      {this.state.status === "paid" ? (
        <Text fontWeight={"500"} fontSize={3} mb={4}>
          Thank you for your payment!
        </Text>
      ) : this.state.status === "unpaid" ? (
        <FormContainer
          environment="sandbox"
          onError={this.onErrorHandler}
          onSuccess={this.onSuccessHandler}
          amount={23}
          component={FormComponent}
          clientKey={"4GU47ng4Q8295vt2"}
          apiLoginId={"675kfQjY52"}
        /> 
      ) : this.state.status[0] === "failure" ? (
        <ErrorComponent
          onBackButtonClick={() => this.setState({ status: "unpaid" })}
          errors={this.state.status[1]}
        />
      ) : null}
    </Box>
  );
}
