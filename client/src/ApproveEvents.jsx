import React, { useEffect, useState } from "react";
import axios from 'axios';


function ApproveEvents(){
    const [events,setEvents] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3000/getEvents')
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    },[])
    const handleApprove = (id) =>{
        axios.post('http://localhost:3000/approveEvents/'+id)
        .then(res =>console.log(res))
        .catch(err => console.log(err))
    }
    const handleDelete = (id) =>{
        axios.delete('http://localhost:3000/deleteEvent/'+id)
        .then(res =>{
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-100 bg-white rounded p-3">
                <table className="table">
                    <thead>
                    <tr>
                    <th>Event Name</th>
                    <th>Catogory</th>
                    <th>Event Date</th>
                    <th>Event Time</th>
                    <th>Venue</th>
                    <th>Description</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {events.map((event) => {
                    return <tr>
                        <td>{event.event_name}</td>
                        <td>{event.category}</td>
                        <td>{event.event_date}</td>
                        <td>{event.event_time}</td>
                        <td>{event.venue}</td>
                        <td>{event.description}</td>
                        <td>
                            <button className="btn btn-success" onClick={(e)=> handleApprove(event._id)}>Approve</button>
                            <button className="btn btn-danger" onClick={(e)=> handleDelete(event._id)}>Reject</button>
                        </td>
                    </tr>
                    })
                    }
                    </tbody>
                </table>
            </div> 
        </div>
    )
}

export default ApproveEvents;