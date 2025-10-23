import React, { components} from 'react';
import Stories from './../components/Stories/Stories';
import Composer from '../components/Composer/Composer';
import Post from './../components/Post/Post';
import RightSidebar from './../components/RightSidebar/RightSidebar';
import LeftSidebar from './../components/LeftSidebar/LeftSidebar';
import Confirm from './../components/Confirm/Confirm';
const Home = () => {
    return ( <div className="Sidebarr">
      
  <Confirm />
   <LeftSidebar />
   <LeftSidebar />
   <LeftSidebar />
   <LeftSidebar />
    </div> );
}
 
export default Home;