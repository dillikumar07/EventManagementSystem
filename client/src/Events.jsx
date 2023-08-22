import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


function Events() {
    const [events,setEvents] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3000/getEvents')
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    },[])
  return (
    <div className='container-fluid'>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/home'>EMS</a>
                    <div className='collapse navbar-collapse' id='navbar'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='/home'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/events'>Events</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/contact'>Contact</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/about'>About</a>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <input className='form-control me-2' type='text' placeholder='Search Events'/>
                            <button className='btn btn-primary' type='button'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br/>
            <br/>
            <div class="container">
                <div class="row">
                    {events.map((event) => {
                        
                        return <Link to={`/display/${event._id}`}>
                                <div class="col-sm-3">
                                    <div className='border text-center'> 
                                        <img src={`http://localhost:3000/Images/${event.image}`} alt='' width="300px" height="150vh" />
                                        <p>{event.event_name}</p>
                                        <p>{event.event_date}</p>
                                        <p>{event.event_time}</p>
                                        <p>{event.venue}</p>
                                    </div>
                                </div>
                                </Link>
                        })
                    }
                </div>
            </div>
        </div>
        
  )
}

export default Events;