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
      console.log(rocketID)
    })();
  }, [rocketID]);

  return <p>เติมข้อมูลของ Rocket ค้าบบบ Id:{rocketID}</p>;
};

export default Rocket;
