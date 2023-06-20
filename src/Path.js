import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Access/Signin";
import SignUp from "./Access/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
