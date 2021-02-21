import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LauncheDetail = () => {
  let { launcheID } = useParams();
  const [launch, setLaunch] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${launcheID}`
      );
      setLaunch(await response.json());
      console.log(launcheID)
    })();
  }, [launcheID]);

  return <p>Single Launchasdasdasd {launcheID}</p>;
};

export default LauncheDetail;
