import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Rocket = () => {
  let { rocketID } = useParams();
  const [rocket, setRocket] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocketID}`
      );
      setRocket(await response.json());
      console.log(rocket)
    })();
  }, [rocketID]);

  return (
  <div>
    {rocket &&
  <div class="bgweb">
    <img class="mywave" src="/opa75.svg"></img>
    <img class="mywave" src="/opa50.svg"></img>
    <img class="mywave" src="/opa25.svg"></img>
    <div class="row" style={{paddingTop:"5%"}}>
      <div class="col-lg-6" style={{display:'flex', justifyContent:'center', alignItems: 'center', paddingLeft:'10%', paddingRight:'5%'}} align='center'>
        <img src={rocket.flickr_images[0]} height='70%'></img>
        <div>
      </div>
      </div>
      <div class="col-lg-6" style={{display:'flex', alignItems: 'center', paddingLeft:'5%', paddingRight:'5%'}}>
          <p>
            <b><ylt>Name&nbsp;:&nbsp;</ylt></b>{rocket.rocket_name}<br></br>
            <b><ylt>Detail&nbsp;:&nbsp;</ylt></b>{rocket.description}<br></br>
            <b><ylt>Country&nbsp;:&nbsp;</ylt></b>{rocket.country}<br></br>
            <b><ylt>Cost/Launch&nbsp;:&nbsp;</ylt></b>{rocket.cost_per_launch}<br></br><br></br>
            <Button variant="warning" href={rocket.wikipedia}>Wikipedia</Button>
          </p>
          
      </div>
    </div>
  </div>}
  </div>
  )
};

export default Rocket;
