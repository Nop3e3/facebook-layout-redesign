import React from 'react';
import Confirm from '../../components/Confirm/Confirm';
import './Person.css';
import Guy from '../../assets/guy.png'
const Person = () => {
    return ( 
        <div className="personn">
            <div className='man'> <div className='sawaa'><img src={Guy}alt="" />Guy Hawkins</div>4H</div>
        <div className='rowww'>  <Confirm /> <button className='delete'>Delete</button></div>  
        </div>

     );
}
 
export default Person;