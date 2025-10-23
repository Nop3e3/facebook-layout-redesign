import React, { components} from 'react';
import Stories from './../components/Stories/Stories';
import Composer from '../components/Composer/Composer';
import Post from './../components/Post/Post';
import RightSidebar from './../components/RightSidebar/RightSidebar';
import LeftSidebar from './../components/LeftSidebar/LeftSidebar';
import Confirm from './../components/Confirm/Confirm';
import Titles from './../components/Titles/Titles';
import Uxui from './../components/Uxui/Uxui';
import logo from './../assets/logo.svg';
import './Home.css';const Home = () => {
    return ( <div className="Sidebarr">
      <div> <img src={logo} alt="" /></div>
  <Confirm />
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
<Uxui /></div>

    </div> );
}
 
export default Home;