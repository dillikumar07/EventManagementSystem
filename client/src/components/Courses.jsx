import React, { useEffect, useState } from "react";
import axios from 'axios';

function Courses() {
    const [events,setEvents] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/getEvents')
        .then(events => setEvents(events.data))
        .catch(err => console.log(err));
    },[])
  return (
    <div class="container">
    <div class="row">
        {events.map((event) => {
            if( event.category == "Courses"){
            return <div class="col-sm-3">
                        <div className='border text-center'> 
                            <img src={`http://localhost:3000/Images/${event.image}`} alt='' width="300px" height="150vh" />
                            <p>{event.event_name}</p>
                            <p>{event.event_date}</p>
                            <p>{event.event_time}</p>
                            <p>{event.venue}</p>
                        </div>
                    </div>}
            })
        }
    </div>
</div>
  )
}

export default Courses;