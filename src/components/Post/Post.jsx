import React from 'react';
import './Post.css';
import posstt from '../../assets/Rectangle 25.png'
import pfpfp from '../../assets/Ellipse 4.png'
;


const Post = () => {
    return ( 
   
<div className='post'>
    <img src={posstt}alt="" />
    <div className='rowww'> <img src={pfpfp}/>Islam Abbas</div>
</div>
   
  

     );
}
 
export default Post; 