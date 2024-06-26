import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Access/Signin";
import SignUp from "./Access/Signup";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/flightbooking" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
