import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Access/Signin";
import SignUp from "./Access/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
