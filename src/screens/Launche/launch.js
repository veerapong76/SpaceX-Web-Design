import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Launch = () => {
  let { launchID } = useParams();
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

  return <p>เติมข้อมูลของ Launch ค้าบบบบ Id:{launchID}</p>;
};

export default Launch;
