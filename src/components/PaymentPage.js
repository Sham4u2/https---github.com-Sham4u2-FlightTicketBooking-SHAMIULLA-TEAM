import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const PaymentPage = () => {
  const classes = useStyles();

  const handlePayment = () => {
    // Perform necessary logic for payment processing
    // ...
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Payment Page</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <Typography variant="h5" align="center">
                Complete Your Payment
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  label="Cardholder Name"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label="Card Number"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label="Expiration Date"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label="CVV"
                  variant="outlined"
                  className={classes.textField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handlePayment}
                >
                  Pay Now
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PaymentPage;
