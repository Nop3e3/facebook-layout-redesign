import React from 'react';
import './Composer.css';
import pfpp from '../../assets/ddd.png'
import live from '../../assets/Vector.svg'
import emoji from '../../assets/mdi_emoji.svg'
import imgsvid from '../../assets/Vector-1.svg'
const Composer = () => {
    return ( 
    <div className="composer">
<div className="topp">
    <img src={pfpp} alt="" />
    <div className="inppt">What’s on your mind, Jenny</div>
</div>
<div className="bottomm">

       <div className="optionn">
        <img src={imgsvid} alt="" />
        <span>Photo/video</span>
    
</div>
    <div className="optionn">
        <img src={live} alt="" />
        <span>Live Video</span>
    
</div>
             <div className="optionn">
        <img src={emoji} alt="" />
        <span>Feeling/activity</span>
    
</div> 
   
    </div>
   </div>


     );
}
 
export default Composer;