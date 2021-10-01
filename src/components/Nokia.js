import React, {useState, useEffect} from 'react'
import {db} from "../base"
import './Null.css'

function Nokia() {
    const[posts, setPosts]=useState(

    []);
    useEffect(() => {
       db.collection('users').onSnapshot(Snapshot =>{
           setPosts(Snapshot.docs.map(doc=>doc.data()))
       })
    }, [])
    return (
        <div className="Header">
             <h1>STUDENTS DATABASE FROM FIREBASE</h1>
            {
                posts.map(
                    (vari)=>(
                        <div className="tab">
                        <table border="" className="tr">
                        <thead>
                            <tr>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>BIRTHDATE</th>
                            <th>NATIONALITY</th>
                            <th>CONTACT</th>
                            </tr>
                        </thead> 
                        <tbody>
                        <tr>
                        <td><h3>{vari.name}</h3></td>
                        <td><h3>{vari.age}</h3></td>
                        <td><h3>{vari.birthdate}</h3></td>
                        <td><h3>{vari.nationality}</h3></td>
                        <td><h3>{vari.Contact}</h3></td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                    )
                  
                )
            }
        </div>
    )
}

export default Nokia