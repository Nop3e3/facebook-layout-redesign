import React from 'react';
import albert from '../../assets/albert.png'
import globe from '../../assets/globe.svg'
import thepost from '../../assets/posst.png'
import './Stories.css';
const Stories = () => {
    return ( 
        <div className="Thepostt">
            <div className='elfo2'>
                <div className='elesm'>
                  <img src={albert} alt="" /><div className='m3b3d'> <div className='elfo2flesm'> 
                    <span>Albert Flores</span></div> 
                    <div className='t7tesm'>2d. <img src={globe} alt="" /></div>
</div>
                </div>
                <div>...</div>
            </div>
            <img src={thepost} alt="" />

        </div>

     );
}
 
export default Stories;