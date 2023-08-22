import React from 'react'

function About() {
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
            <div className='text-center align-items-center justify-content-center'>
            <h1 >About US</h1>
            <p>
                We're experience finders and enablers of fun, with tickets to everything from the latest in live sports events, to music festivals and concerts, 
                standup comedy and open mic shows, food and shopping festivals, workshops and then some.
            </p>
            </div>
            
        </div>
  )
}

export default About