import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(4),
  },
}));

const FlightTicket = ({ selectedFlight, selectedSeats, passengerInfo }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flight Ticket</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <Typography variant="h5" align="center">
                Flight Details
              </Typography>
              <Typography variant="h6">
                Airline: {selectedFlight.airline}
              </Typography>
              <Typography variant="h6">
                Departure: {selectedFlight.departure}
              </Typography>
              <Typography variant="h6">
                Arrival: {selectedFlight.arrival}
              </Typography>
              <Typography variant="h6">
                Seats: {selectedSeats.join(", ")}
              </Typography>
              <Typography variant="h6">Passenger Details:</Typography>
              <Typography variant="body1">
                Name: {passengerInfo.name}
              </Typography>
              <Typography variant="body1">Age: {passengerInfo.age}</Typography>
              <Typography variant="body1">
                Number of Seats: {passengerInfo.numSeats}
              </Typography>
              <Typography variant="h6">
                Thank you for choosing our airline!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FlightTicket;
