import React, { useEffect, useState } from 'react'
import { Button, Card ,CardBody,CardImg} from 'reactstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const AllPirates = () => {
    const [pirates,setPirates]=useState([].sort());
    const history =useHistory()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates/list')
        .then(res => setPirates(res.data))
        
        .catch(err => console.error(err))
    },[]);
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/pirate/' + id)
        .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
        .catch((err)=>console.log(err))  
    }
  return (
    <div>
        <Card body color="warning" inverse >
          <div className='after'> <h1>Pirate Crew</h1> <Button  color="primary" onClick={()=>history.push("/pirate/new")}>Add Pirate</Button></div>
        <CardBody>
            {pirates.map((pirate,index)=>{return(
            <Card  body inverse
            style={{
              backgroundColor: '#333',
              borderColor: '#333'
            }} key={index}>
                <p> {pirate.name}</p>
            <CardBody>
            <div className='after'> 
            {/* <CardImg alt="Card image cap" src={pirate.image_url}/> */}
             <Button  color="primary" onClick={()=>history.push("/pirate/"+pirate._id)}>View Pirate</Button> <Button  color="danger" onClick={()=>deleteHandler(pirate._id)}>Walk The Plank</Button></div>
            </CardBody>
            </Card>)})}
        
        </CardBody>
        </Card>
    </div>
  )
}

export default AllPirates