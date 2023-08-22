import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import axios from 'axios';
import Games from './Images/games.png';
import Music from './Images/music.png';
import Workshop from './Images/workshop.png';
import Anirudh from './Images/anirudh.jpg';
import Comedy from './Images/scs.jpg';
import Icc from './Images/icc.jpeg';
import Course from './Images/courses.png';
import Comedyy from './Images/comedyy.png';
import Sports from './Images/sportsss.jpg';
import { Link } from 'react-router-dom';

function Home(){
    const [events,setEvents] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/getEvents')
        .then(events => setEvents(events.data))
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
            <div className='container'>
            <AliceCarousel autoPlay autoPlayInterval="1000">
                <p><img src={Icc} className='slider-img d-block w-100 h-25'  alt="ICC"/></p>
                <p><img src={Anirudh} className='slider-img d-block w-100 h-25' alt="Music"/></p>
                <p><img src={Comedy} className='slider-img d-block w-100 h-25' alt="Comedy"/></p>
            </AliceCarousel>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <Link to='/music' className='text-center text-decoration-none'>
                        <div className='border'>
                        <img src={Music} alt='music'/><br/>
                        Music
                        </div>
                        </Link>
                    </div>
                    <div className='col-sm-2'>
                        <Link to='/workshop'className='text-center text-decoration-none' >
                        <div className=' border'>
                        <img src={Workshop} alt='workshop'/>
                        Workshops
                        </div>
                        </Link>
                    </div>
                    <div className='col-sm-2'>
                        <Link to='/games' className='text-center text-decoration-none'>
                        <div className='border'>
                        <img src={Games} alt='games'/>
                        <p>Games</p>
                        </div>
                        </Link>
                    </div>
                    <div className='col-sm-2'>
                        <Link to='/course' className='text-center text-decoration-none'>
                        <div className=' border'>
                        <img src={Course} alt='course'/>
                        Courses
                        </div>
                        </Link>
                    </div>
                    <div className='col-sm-2'>
                        <Link to='/comedy' className='text-center text-decoration-none'>
                        <div className=' border'>
                        <img src={Comedyy} alt='comedy'/>
                        Comedy
                        </div>
                        </Link>
                    </div>
                    <div className='col-sm-2'>
                        <Link to='/sports' className='text-center text-decoration-none' >
                        
                        <img src={Sports} className='h-25' alt='sports'/>
                        <p>Sports</p>
                
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )
}



export default Home;