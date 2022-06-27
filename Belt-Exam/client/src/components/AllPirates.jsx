import React, { useEffect, useState } from 'react'
import { Button, Card ,CardBody,CardImg} from 'reactstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import car from '../car.jpg' // relative path to image

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
        <Card body   style={{
              backgroundColor:'#7a5e08',
              padding:100}} inverse >
          <div className='after'> <h1>Pirate Crew</h1> <Button  color="primary" onClick={()=>history.push("/pirate/new")}>Add Pirate</Button></div>
          <hr/>
        <CardBody>
            {pirates.map((pirate,index)=>{return(
            <Card  body inverse
            style={{
              backgroundColor: "#d9c485",
              borderColor: '#0c0b08',
              margin: 10
            }} key={index}>
                <h1> {pirate.name}</h1>
                <br/>
            <CardBody>
            <div className='after'> 
             <div><CardImg alt={pirate.name} src={pirate.image_url} width="80" height="80" /></div> 
             <div>
             <Button  color="primary" onClick={()=>history.push("/pirate/"+pirate._id)}>View Pirate</Button> <Button  color="danger" onClick={()=>deleteHandler(pirate._id)}>Walk The Plank</Button></div></div>
            </CardBody>
            </Card>
            )})}
        
        </CardBody>
        </Card>
    </div>
  )
}

export default AllPirates