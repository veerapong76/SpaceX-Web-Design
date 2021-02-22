import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { Link,useRouteMatch } from "react-router-dom";

const Launch = () => {
  let { launchID } = useParams();
  let { path, url } = useRouteMatch();
  const [launch, setLaunch] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${launchID}`
      );
      setLaunch(await response.json());
      console.log(launchID)
    })();
  }, [launchID]);

  return (
    <div>
    {launch &&
  <div class="bgweb">
    <div class="row">
      <div class="col-lg-6" style={{display:'flex', justifyContent:'center', alignItems: 'center', paddingLeft:'10%', paddingRight:'5%'}} align='center'>
        <img src={launch.links.mission_patch} height='50%'></img>
      </div>
      <div class="col-lg-6" style={{display:'flex', alignItems: 'center', paddingLeft:'5%', paddingRight:'5%'}}>
          <p>
            <b><ylt>Name&nbsp;:&nbsp;</ylt></b>{launch.mission_name}<br></br>
            <b><ylt>Detail&nbsp;:&nbsp;</ylt></b>{launch.details}<br></br>
            <b><ylt>Rocket&nbsp;:&nbsp;</ylt></b><Link to={`/rockets/${launch.rocket.rocket_id}`}>{launch.rocket.rocket_name}</Link><br></br>
            <b><ylt>Launch&nbsp;Year&nbsp;:&nbsp;</ylt></b>{launch.launch_year}<br></br><br></br>
            <Button variant="warning" href={launch.links.wikipedia}>Wikipedia</Button>
          </p>
          
      </div>
    </div>
  </div>}
  </div>
  );
};

export default Launch;
