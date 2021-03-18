import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom'

function Navbar() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

  return (
        <nav>
            <Link style={navStyle} to='/'>
            <h3>Shop App</h3>
            </Link>
            
            <ul className='nav-links'>
                <Link style={navStyle} to='/login'>
                <li>Login</li>
                </Link>
                <Link style={navStyle} to='/register'>
                <li>Register</li>
                </Link>
                <Link style={navStyle} to='/product'>
                <li>Product</li>
                </Link>
                <Link style={navStyle} to='/order'>
                <li>Order</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;