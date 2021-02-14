import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
import NavbarOthers from "./Component/NavbarOthers";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact">
            <NavbarOthers />
            <Contact />
          </Route>
          <Route path="/about">
            <NavbarOthers />
            <About />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
