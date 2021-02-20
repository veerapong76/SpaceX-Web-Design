import React, { useState, useEffect } from "react";
import {Alert} from 'react-bootstrap';

const Rockets = () => {
    const [rockets, setRockets] = useState([]);
  
    useEffect(
        () => {
          const fetchRockets = async () => {
            const response = await fetch('https://api.spacexdata.com/v3/rockets')
            const data = await response.json()
            setRockets(data)
          }
          fetchRockets()
        },
        [],
      )
    

    return(
        <div>
            {rockets.map((rocket) => (<Alert variant='primary'>{rocket.id}</Alert>))}
        </div>
    )
};

export default Rockets