import React, { useState, useEffect } from "react";
import {Alert} from 'react-bootstrap';


const Launches = () => {

    const [launches, setLaunches] = useState([]);
  
    useEffect(
        () => {
          const fetchLaunches = async () => {
            const response = await fetch('https://api.spacexdata.com/v3/launches')
            const data = await response.json()
            setLaunches(data)
          }
          fetchLaunches()
        },
        [],
      )
    return(
        <div>
        {launches.map((launche) => (<Alert variant='primary'>{launche.flight_number}</Alert>))}
        </div>
    )
}
export default Launches