import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  makeStyles,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  textField: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  seatButton: {
    margin: theme.spacing(1),
  },
}));

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const citiesByState = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Kurnool",
  ],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
  // Add more cities for each state...
};

const flights = [
  {
    id: 1,
    airline: "Indigo",
    departure: "8:00 AM",
    arrival: "10:30 AM",
    price: 3500,
  },
  {
    id: 2,
    airline: "Air India",
    departure: "9:30 AM",
    arrival: "12:00 PM",
    price: 4000,
  },
  {
    id: 3,
    airline: "SpiceJet",
    departure: "11:00 AM",
    arrival: "1:30 PM",
    price: 3200,
  },
  {
    id: 4,
    airline: "GoAir",
    departure: "1:00 PM",
    arrival: "3:30 PM",
    price: 3800,
  },
  {
    id: 5,
    airline: "Vistara",
    departure: "2:30 PM",
    arrival: "5:00 PM",
    price: 4500,
  },
  {
    id: 6,
    airline: "AirAsia",
    departure: "4:00 PM",
    arrival: "6:30 PM",
    price: 3000,
  },
  {
    id: 7,
    airline: "Jet Airways",
    departure: "5:30 PM",
    arrival: "8:00 PM",
    price: 4200,
  },
  {
    id: 8,
    airline: "SpiceJet",
    departure: "7:00 PM",
    arrival: "9:30 PM",
    price: 3500,
  },
  {
    id: 9,
    airline: "GoAir",
    departure: "8:30 PM",
    arrival: "11:00 PM",
    price: 3700,
  },
  {
    id: 10,
    airline: "Indigo",
    departure: "10:00 PM",
    arrival: "12:30 AM",
    price: 3400,
  },
];

const seatNumbers = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
];

const LandingPage = () => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [flightsList, setFlightsList] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    setIsSearchClicked(true);
    // You can perform additional logic here to filter flights based on selectedState and selectedCity
    setFlightsList(flights.slice(0, 10)); // Show first 10 flights from the flights array
  };

  const handleBook = (flight) => {
    setSelectedFlight(flight);
    setIsDialogOpen(true);
  };

  const handleSeatSelection = (seatNumber) => {
    const isSelected = selectedSeats.includes(seatNumber);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleProceedToPayment = () => {
    // Perform necessary logic for payment processing
    // Redirect to the payment form or payment gateway
    console.log("Selected Seats:", selectedSeats);
    // Redirect code goes here...
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flight Booking</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" align="center">
                Find Your Flights
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel>Select State</InputLabel>
                  <Select
                    value={selectedState}
                    onChange={handleStateChange}
                    label="Select State"
                  >
                    {states.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel>Select City</InputLabel>
                  <Select
                    value={selectedCity}
                    onChange={handleCityChange}
                    label="Select City"
                    disabled={!selectedState}
                  >
                    {selectedState &&
                      citiesByState[selectedState].map((city) => (
                        <MenuItem key={city} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Departure Date"
                  variant="outlined"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </form>
            </Paper>
            {isSearchClicked && (
              <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                  Available Flights
                </Typography>
                <List>
                  {flightsList.map((flight) => (
                    <ListItem key={flight.id}>
                      <ListItemText
                        primary={`${flight.airline} - ${flight.departure} to ${flight.arrival} (Price: ${flight.price} INR)`}
                      />
                      <ListItemSecondaryAction>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleBook(flight)}
                        >
                          Book
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Select Seat(s)</DialogTitle>
        <DialogContent>
          <Typography>
            Flight: {selectedFlight && selectedFlight.airline}
          </Typography>
          <Typography>
            Departure: {selectedFlight && selectedFlight.departure}
          </Typography>
          <Typography>
            Arrival: {selectedFlight && selectedFlight.arrival}
          </Typography>
          <Typography variant="h6">Select Seat(s):</Typography>
          <div>
            {seatNumbers.map((seatNumber) => (
              <Button
                key={seatNumber}
                variant={
                  selectedSeats.includes(seatNumber) ? "contained" : "outlined"
                }
                color="primary"
                className={classes.seatButton}
                onClick={() => handleSeatSelection(seatNumber)}
              >
                {seatNumber}
              </Button>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleProceedToPayment}
            color="primary"
            variant="contained"
          >
            Proceed to Payment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LandingPage;
