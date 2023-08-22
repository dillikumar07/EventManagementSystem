import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateEvents(){
    const [event_name,setEventName] = useState();
    const [category,setEventCategory] = useState();
    const [event_date,setEventDate] = useState();
    const [event_date1,setEventDate1] = useState();
    const [event_time,setEventTime] = useState();
    const [venue,setEventVenue] = useState();
    const [file,setFile] = useState();
    const [description,setDescription] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event_name',event_name);
        formData.append('category',category);
        formData.append('event_date',event_date);
        formData.append('event_date1',event_date1);
        formData.append('event_time',event_time);
        formData.append('venue',venue);
        formData.append('image',file);
        formData.append('description',description);
        axios.post('http://localhost:3000/createvent', formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(result => {
            console.log(result);
            navigate('/approve')
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <form onSubmit={handleSubmit}>
                <label htmlFor="event_name">Event Name:</label><br/>
                <input type="text" name="event_name" id="event_name" placeholder="Enter Event Name" className="form-control rounded-0" onChange={(e)=>setEventName(e.target.value)} autoComplete="off" required/><br/>
                <label htmlFor="category">Event Category:</label><br/>
                <select  name="category" id="category" className="form-control rounded-0" onChange={(e)=>setEventCategory(e.target.value)} autoComplete="off" required>
                    <option value="Worshop">Workshop</option>
                    <option value="Courses">Courses</option>
                    <option value="Games">Games</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                    <option value="Comedy">Comedy</option>
                </select>
                <label htmlFor="event_date">Event Start Date:</label><br/>
                <input type="date" name="event_date" id="event_date" placeholder="Enter Event Start Date" className="form-control rounded-0" onChange={(e)=>setEventDate(e.target.value)} autoComplete="off" required/><br/>
                <label htmlFor="event_date1">Event End Date:</label><br/>
                <input type="date" name="event_date1" id="event_date1" placeholder="Enter Event End Date" className="form-control rounded-0" onChange={(e)=>setEventDate1(e.target.value)} autoComplete="off" /><br/>
                <label htmlFor="event_time">Event Timings:</label><br/>
                <input type="text" name="event_time" id="event_time" placeholder="Enter Event Time" className="form-control rounded-0" onChange={(e)=>setEventTime(e.target.value)} autoComplete="off" required/><br/>
                <label htmlFor="venue">Event Venue:</label><br/>
                <input type="text" name="venue" id="venue" placeholder="Enter Event venue" className="form-control rounded-0" onChange={(e)=>setEventVenue(e.target.value)} autoComplete="off" required/><br/>
                <label htmlFor="image">Image :</label><br/>
                <input type="file" name="file" className="form-control rounded-0" onChange={e => setFile(e.target.files[0])}/><br/>
                <label htmlFor="description">Description</label><br/>
                <input type="textarea" name="description" id="description" placeholder="Enter Event Details" className="form-control rounded-0" onChange={(e)=>setDescription(e.target.value)} autoComplete="off" required/><br/>
                <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
            </form>
        </div>
        </div>
    )
}

export default CreateEvents;