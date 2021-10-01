import React, { useState,useEffect } from 'react';
import {db} from "../base";
import { Link } from 'react-router-dom';
import { keys } from 'lodash';

const ListRecord = () => {
    const [data, sendData] = useState({});



    useEffect(() => {
        db.child("user").on("value",(snapshot) => {
            if(snapshot.val() !==null) {
                sendData({
                    ...snapshot.val(),
                });
            }else{
                snapshot({});
            }
           
        });

    }, []);
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="jumbotron">
                        <h2 className="display-2">  Contact Management System</h2>

                    </div>
                    <table className="table table-bordered table-striped">
                        <thead className="thread-dark">
                            <tr>
                                <th>S/N</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>BIRTHDATE</th>
                                <th>NATIONALITY</th>
                                <th>CONTACT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {object.keys(data).map((id, index) => {
                                return (
                                    <tr key={id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data[id].name}</td>
                                        <td>{data[id].age}</td>
                                        <td>{data[id].birthdate}</td>
                                        <td>{data[id].nationality}</td>
                                        <td>{data[id].contact}</td>
                                        <td>
                                            <Link to={'/update/${id}s'}>
                                                <a className="btn text-primary">
                                                    <i className="fas fa-pencial-alt" />
                                                </a>
                                                </Link>

                                                <a className="btn text-danger">
                                                    <i className="fas fa-trash-alt" />
                                                </a>
                                               
                                                <Link to={'/view/${id}'}>
                                                <a className="btn text-info">
                                                    <i className="fas fa-eye" />
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>

                                );    
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>
    )
}

export default ListRecord