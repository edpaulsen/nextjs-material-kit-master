import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { LocalOffer } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>

        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>

                <h2 className={classes.title}>Features</h2>
                <h5 className={classes.description}><i className="fas fa-sign-in-alt" /> Fully Secure & HIPAA Compliant</h5>

          </GridItem>



          <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Pricing</h2>
                <h5 className={classes.description}>Basic or Standard Options</h5>
            </GridItem>


              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>No Redirects to 3rd Party Websites</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Cancel Any Time</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Build & Manage Forms in WordPress</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Basic – FREE (Limit 1 form & 25 submissions/mo)</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Integrates With Caldera & Gravity</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Standard – $55/mo or $600/yr</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Optional Drag ‘N Draw Signature</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Supports 1 Live Domain & 1 Staging</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Ability to Separate Forms by Location</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Unlimited Forms</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Ability to Separate Forms by Doctor</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Unlimited Form Submissions</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Create Secure PDF’s of Submitted Forms</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Outstanding Customer Support</h5>
              </GridItem>    
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>Secure Unlimited File Upload Option</h5>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
               <h5 className={classes.description}>File Upload Add-On $30/mo or $300/yr</h5>
              </GridItem>       
        
        
        
        
        
        </GridContainer>
      </div>
    </div>
  );
}
