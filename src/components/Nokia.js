import React, {useState, useEffect} from 'react'
import {db} from "../base"
import './Body.css'

function Nokia() {
    const[posts, setPosts]=useState(

    []);
    useEffect(() => {
       db.collection('users').onSnapshot(Snapshot =>{
           setPosts(Snapshot.docs.map(doc=>doc.data()))
       })
    }, [])
    return (
        <div>
             <h1>DATA FROM FIREBASE</h1>
            {
                posts.map(
                    (vari)=>(
                        <div className="tab">
                        <table border="" className="tr">
                        <tr>
                        <td><h3>{vari.name}</h3></td>
                        <td><h3>{vari.age}</h3></td>
                        <td><h3>{vari.birthdate}</h3></td>
                        <td><h3>{vari.nationality}</h3></td>
                        <td><h3>{vari.Contact}</h3></td>
                        </tr>
                        </table>
                        </div>
                    )
                  
                )
            }
        </div>
    )
}

export default Nokia
