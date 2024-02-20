import berrieIcon from './assets/Berrie.ico'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className="header">
            <h1><img className='berrie-icon' src={berrieIcon} alt="Berrie Icon" /> Berrie Van Zyl</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
                <hr></hr>
            </div>
        </header>
    );
}
export default Header