import React, { components} from 'react';
import Stories from './../components/Stories/Stories';

import Post from './../components/Post/Post';
import RightSidebar from './../components/RightSidebar/RightSidebar';
import LeftSidebar from './../components/LeftSidebar/LeftSidebar';
import Confirm from './../components/Confirm/Confirm';
import Titles from './../components/Titles/Titles';
import Uxui from './../components/Uxui/Uxui';
import Navcomp from './../components/Navcomp/Navcomp';
import logo from './../assets/logo.svg';
import Composer from '../components/Composer/Composer';
import './Home.css';
const Home = () => {
    return ( <div className="Sidebarr">
     
    <div className='col'> 
        <div className='navbarr'> <img src={logo} alt="" />
      <div className='homee'>
           <Navcomp />
           <Navcomp />
            <Navcomp />
           <Navcomp />
        </div>
        <div className='gapp'></div> </div>  
        <div className='sidde'>
  <div className='siddde'><Confirm />
  <div className='watchh'>
   <LeftSidebar />
   <LeftSidebar />
   <LeftSidebar />
   <LeftSidebar /></div>
   <div className='stuff'>
<Titles />
<Uxui />
<Uxui />
<Uxui />
<Uxui /></div> </div> <div className='coll'>
<div className='posts'>
    <Post />
    <Post />
    <Post />
    <Post />
</div>
<Composer />
</div> </div> 
  </div>

    </div> );
}
 
export default Home;