import logo from "./logo.svg";
import "./App.css";
import Rockets from "./screens/rockets.js";
import Home from "./screens/home.js";
import Launches from "./screens/launches.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Space X</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer activeStyle={{color: "red"}} to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer activeStyle={{color: "red"}} to="/rockets">
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>
            <LinkContainer activeStyle={{color: "red"}} to="/launches">
              <Nav.Link>Launches</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
