import React, {useState,useEffect} from 'react'
import {db} from "../base"
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'

const AddEdit = () => {
    const values = {
        name: '',
        age: '',
        birthdate: '',
        nationality: '',
        contact: '',
    };
    
    const [initialState, setState] = useState(values)
    const [name,age,birthdate,nationality,contact] = initialState; 
    const history = useHistory();

    const handleInputChange = (e) => {
        let {name, value} = e.target
        setState({
            ...initialState,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        db.child("user").push(initialState, (err) => {
            if(err){
                console.log(err);
            }
        });
        history.push("/");

    };
  
    return (
        <div className="container md-5">
            <div className="row">
                <div className="col md-6">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                          <label className="bmd-label-floating">name</label>
                          <input
                           type="text" 
                           className="form-control" 
                           value={name} 
                           name="name"
                            on onChange={handleInputChange}
                            />
                       </div> 
                       <div className="form-group">
                          <label className="bmd-label-floating">age</label>
                          <input
                           type="number" 
                           className="form-control" 
                           value={age} 
                           name="age"
                            on onChange={handleInputChange}
                            />
                       </div> 
                       <div className="form-group">
                          <label className="bmd-label-floating">birthdate</label>
                          <input
                           type="text" 
                           className="form-control" 
                           value={birthdate} 
                           name="birthdate"
                            on onChange={handleInputChange}
                            />
                       </div>   
                       <div className="form-group">
                          <label className="bmd-label-floating">nationality</label>
                          <input
                           type="text" 
                           className="form-control" 
                           value={nationality} 
                           name="nationality"
                            on onChange={handleInputChange}
                            />
                       </div>       
                       <div className="form-group">
                          <label className="bmd-label-floating">contact</label>
                          <input
                           type="number" 
                           className="form-control" 
                           value={contact} 
                           name="contact"
                            on onChange={handleInputChange}
                            />
                       </div>       
                       <button className="btn btn-default">Cancel</button>   
                       <button type="submit" className="btn btn-success btn-raised">Submit</button>  
                    </form>
                 </div>
            </div>        

            
        </div>
    )
}

export default AddEdit