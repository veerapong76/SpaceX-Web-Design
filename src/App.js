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
        <Navbar style={{backgroundColor:"#1a181d", paddingLeft:"3%", paddingRight:"5%"}}>
          <Navbar.Brand style={{fontSize:'3em', color:"#efaa1a"}}>Space X</Navbar.Brand>
          <Nav className="ml-auto">
            <LinkContainer style={{color:"white"}} activeStyle={{color: "#efaa1a"}} to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{color:"white"}} activeStyle={{color: "#efaa1a"}} to="/rockets">
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{color:"white"}} activeStyle={{color: "#efaa1a"}} to="/launches">
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
