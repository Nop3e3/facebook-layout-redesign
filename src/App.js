import React from 'react';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Stories from './components/Stories/Stories';
import Composer from './components/Composer/Composer';
import Post from './components/Post/Post';
import RightSidebar from './components/RightSidebar/RightSidebar';
import './App.css';


const POST_IMAGE = process.env.PUBLIC_URL + '/post.jpg';


export default function App() {
return (
<div className="app-wrap">
<LeftSidebar />
<main className="center">
<Stories />
<Composer />
<section className="feed">
<Post image={POST_IMAGE} />
<Post image={POST_IMAGE} />
<Post image={POST_IMAGE} />
</section>
</main>
<RightSidebar />
</div>
);}