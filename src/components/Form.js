import React from "react";
import {db} from "../base"
import {Link} from "react-router-dom";

const Form = () => {

    const sendData=(e)=>{
        e.preventDefault()

    const{jina,umri,tarehe,utaifa,namba}=e.target.elements   
        
       // console.log(jina.value)
       // console.log(umri.value)
       // console.log(tarehe.value)
       // console.log(utaifa.value)
       // console.log(namba.value)

        try{
            db.collection("users").add(
                {
                    name: jina.value,
                    age: umri.value,
                    birthdate: tarehe.value,
                    nationality: utaifa.value,
                    Contact: namba.value
                }
            )
            console.log("data stored successfully")

        }
        catch (error){
            console.log(error)
        }

        alert('Successfully submitted')       
        
    }
    
    return (

        <div className="hey">
        <h2 className='h2'>Students Registration Form</h2>

        <form className="bash"  onSubmit={sendData}>

            name:<input type="text" name="jina" placeholder="Jaza jina lako" required /><br/><br/>
            Age:<input type="age" name="umri" placeholder="Jaza umri wako" required  /><br/><br/>
            birthdate:<input type="date" name="tarehe" placeholder="tarehe ya kuzaliwa" required /><br/><br/>
            Nationality:<input type="nationality" name="utaifa" placeholder="Utaifa" required /><br/><br/>
            Contact:<input type="text" name="namba" placeholder="Namba ya simu" required /><br/><br/>
            <button className="door"><Link to="/Nokia">Submit</Link></button>

        </form>
        </div>
            
    )
}

export default Form