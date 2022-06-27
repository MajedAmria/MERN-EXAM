import React, { useEffect, useState } from 'react'
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const PirateForm = () => {
    const [pirateName,setPirateName]=useState("");
    const [image,setImage]=useState("");
    const [treasures,setTreasures]=useState(0);
    const [phrase,setPhrase]=useState("");
    const [position,setposition]=useState("");
    const [leg,setLeg]=useState(true);
    const [eyepatch,setEyePatch] =useState(true);
    const [hookhand,setHookhand] =useState(true);
    const [errors,setErrors]= useState([]);
    const history =useHistory()
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate/new',{
            name:pirateName,
            image_url:image,
            num_of_treasures:treasures,
            catch_phrase:phrase,
            crew_position:position,
            peg_leg:leg,
            eye_patch:eyepatch,
            hook_hand:hookhand
        })
        .then(()=>history.push("/pirates"))
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
  return (
    <div>
        <Card body style={{
              backgroundColor:'#7a5e08',padding:50,margin:100}} inverse >
          <div className='after'> <h1>Add Pirate</h1> <Button  color="primary" onClick={()=>history.push("/pirates")}>Crew Board</Button></div>
          <hr/>
        <CardBody >
        
            <Form onSubmit={onSubmitHandler}>
             {errors.map((err, index) => <p key={index}>{err}</p>)} 
            <div id='def'>
                <div>
                <Label for="pirate">Pirate Name</Label>
                <Input
                name="pirate"
                placeholder="insert pirate name"
                type="text"
                value={pirateName}
                onChange ={(e)=>setPirateName(e.target.value)}
                /><span className="text-danger">{errors.name ? errors.name.message: "" }</span> <br/><br/>
                <Label for="Image">Image URL</Label>
                <Input
                name="Image"
                placeholder="insert Image URL"
                type="text"
                value={image}
                onChange ={(e)=>setImage(e.target.value)}
                />
                <br/><br/>
                <Label for="Chests"># of Treasures Chests</Label>
                <Input
                name="Chests"
                placeholder="insert number of Treasures Chests"
                type="number"
                value={treasures}
                onChange ={(e)=>setTreasures(e.target.value)}
                />
                 <br/><br/>
                <Label for="Phrase">Pirate Catch Phrase</Label>
                <Input
                name="Phrase"
                placeholder="insert Catch Phrase"
                type="text"
                value={phrase}
                onChange ={(e)=>setPhrase(e.target.value)}
                />
                </div>
                <div>
                <Label for="select">
                Crew Position
                </Label>
                <Input
                id="exampleSelect"

                type="select"
               
                onChange ={(e)=>setposition(e.target.value)}>
                <option>
                Captain
        </option>
      <option>
        First Mate
      </option>
      <option>
        Quarter Master
      </option>
      <option>
        Boatswain
      </option>
      <option>
        Powder Monky
      </option>
      </Input>
      <br/><br/>
        <Input
      name="check"
      type="checkbox"
      value="leg"
      onChange ={(e)=>setLeg(!leg)}
        />
        <Label
      check
      for="check"
        >
      peg leg
        </Label>
        <br/>
        <Input
      name="exampleCheck"
      type="checkbox"
      value="eyepatch"
      onChange ={(e)=>setEyePatch(!eyepatch)}
        />
        <Label
      check
      for="exampleCheck"
        >
      eye patch
        </Label>
        <br/>
        <Input
      id="exampleCheck1"
      name="check"
      type="checkbox"
      value="hookhand"
      onChange ={(e)=>setHookhand(!hookhand)}
        />
        <Label
      check
      for="exampleCheck1"
        >
      hook hand
        </Label>
        <br/><br/>
        <br/><br/>
        <br/><br/>
            <br/><br/>
            <Button  color="primary">Add Pirate</Button>
                </div>
               
                </div>
                </Form>
           
            </CardBody>
            </Card>
        
       
    </div>
  )
}

export default PirateForm