import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
      console.log(data);
    };
    fetchRockets();
  }, []);

  const rocketImg = [
    "https://spaceth.co/wp-content/uploads/2020/04/Falcon-1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg/800px-SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg/800px-Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg",
    "https://cdn.mos.cms.futurecdn.net/ZPq77UkJ7HP4524nZwUBob-320-80.jpg",
  ];
  return (
    <div class="bgweb">
      {/* <img class="mywave" src="/opa75.svg"></img>
      <img class="mywave" src="/opa50.svg"></img>
      <img class="mywave" src="/opa25.svg"></img> */}
    <div
      class="row"
      style={{
        padding: "5%",
      }}
    >
      {rockets.map((rocket) => (
        <div
          class="col-xl-3 col-lg-6"
          style={{ marginBottom: "10px" }}
          align="center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{padding:'5px'}}
              variant="top"
              src={rocketImg[rocket.id - 1]}
              height="300px"
            />
            <Card.Body>
              <Card.Title style={{fontSize: "1.5em", marginBottom:'10%'}}>
                {rocket.rocket_name}
              </Card.Title>
              
              <Link to={`${url}/${rocket.rocket_id}`}>
                <Button variant="warning">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Rockets;
