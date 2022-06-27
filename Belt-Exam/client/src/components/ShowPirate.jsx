import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card ,CardBody,Table} from 'reactstrap'
import { useParams } from 'react-router-dom';
const ShowPirate = (props) => {
    const [pirate, setPirate] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + id)
            .then(res => setPirate(res.data))
    }, [id])
  return (
            <div>
                 <Card body color="warning" inverse >
             <CardBody >
             <h1>{pirate.name}</h1>
             <Card  body inverse
            style={{
              backgroundColor: 'orange',
              borderColor: '#333'
            }} >
            <CardBody>
             <h2>About</h2>
            <h1>Crew Position: {pirate.crew_position}</h1>
            <h1>Treasures: {pirate.num_of_treasures}</h1>
            <h1>Peg leg: {pirate.peg_leg ? "Yes" : "No"}</h1>
            <h1>Eye Patch: {pirate.eye_patch ? "Yes" : "No"}</h1>
            <h1>Hook Hand: {pirate.hook_hand ? "Yes" : "No"}</h1>
            </CardBody>
            </Card>
            </CardBody>
            </Card>
            </div>
  )
}

export default ShowPirate