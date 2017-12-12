import React, { Component } from 'react';
import Routes from './routes';
import {NavLink} from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
           <div>
               <nav className='nav'>
                   <div>WestSide University</div> 
                   <div className='link-wrap'>
                        <NavLink to='/' className='links'>Home</NavLink>
                        <NavLink to='/about' className='links'>About</NavLink> 
                   </div>
               </nav>
              {Routes}
           </div> 
        )
    }

}