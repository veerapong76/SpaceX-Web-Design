import React, { useState, useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Launches = () => {
  let { path, url } = useRouteMatch();
  const [launches, setLaunches] = useState([]);
  const [years, setYears] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=20&launch_year=" +
          years +
          "&rocket_id=" +
          name +
          "&launch_success=" +
          success
      );
      const data = await response.json();
      console.log(data);
      setLaunches(data);
    };
    fetchLaunches();
  }, [years, name, success]);

  return (
    <div class="bgweb">
      
      <div align='center' style={{marginBottom:'10vh'}}>

        <div style={{paddingTop:'2%'}}>
        <select
          onChange={(e) => {
            setYears(e.target.value);
          }}
          value={years}
        >
          <option value="" selected disabled hidden>
            Select Year
          </option>
          <option value="">All</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
        </select>
        <select
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        >
          <option value="" selected disabled hidden>
            Select Rocket Name
          </option>
          <option value="">All</option>
          <option value="falcon1">Falcon 1</option>
          <option value="falcon9">Falcon 9</option>
          <option value="falconheavy">Falcon Heavy</option>
        </select>
        <select
        
          onChange={(e) => {
            setSuccess(e.target.value);
          }}
          value={success}
        >
          <option value="" selected disabled hidden>
            Select Launch Success
          </option>
          <option value="">All</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        </div>
          
        {launches &&
        <div class="d-flex flex-wrap bgweb" style={{marginTop:'2%', justifyContent: 'center'}}>
          {launches.map((launch) => (
            <div
            style={{ margin: "10px" }}
            align="center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{padding:'5px'}}
                variant="top"
                src={launch.links.mission_patch_small}
                height="300px"
              />
              <Card.Body>
                <Card.Title style={{fontSize: "1.5em", marginBottom:'10%'}}>
                  {launch.mission_name}
                </Card.Title>
                
                <Link to={`${url}/${launch.flight_number}`}>
                  <Button variant="warning">Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          ))}
        </div>
        }
      </div>
      {/* <img class="mywave" src="/launch.png" width="100%" style={{zIndex:-1}}></img> */}
    </div>
  );
};
export default Launches;
