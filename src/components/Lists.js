import React, {useState} from "react";
import {db} from "../base"
 
 function Lists() {
     

    const [jina,setJina] = useState("")
    const [umri,setUmri] = useState("")
    const [tarehe,setTarehe] = useState("")
    const [utaifa,setUtaifa] = useState("")
    const [namba,setNamba] = useState("")

   
    const searchterm=(e)=>{
        e.preventDefault();
        const {search} = e.target.elements
        try{
            db.collection("users").get()
            .then((querySnapshot)=>{
                querySnapshot.forEach((elements)=>{
                    let data=elements.data();
                    const check=toString(data.name)===toString(search.value)

                    if (data.name===check){
                        console.log(data) 


                        // setJina(data.jina)
                        // setUmri(data.umri)
                        // setTarehe(data.tarehe)
                        // setUtaifa(data.utaifa)
                        // setNamba(data.namba)

                        // console.log(jina)
                        // console.log(umri)
                        // console.log(tarehe)
                        // console.log(namba)
                        // console.log(utaifa)

                        
                    }
                    // else{

                    //     console.log('user not found')
                    // }
                       
                     
                })
            })
                
            
        }
        catch (error){
            console.log(error)
        }
        e.target.reset()
    }
     
   


     return (
         <div>
             <h2>Data Details</h2>
             <form onSubmit={searchterm}>
                 <input type="text" name="search" className="bash" />
                 <button>submit</button>
                 
             </form>
         </div>
     )
 }
 
 export default Lists