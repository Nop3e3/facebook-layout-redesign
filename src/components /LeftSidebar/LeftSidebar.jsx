import React from 'react';
import './LeftSidebar.css';


export default function LeftSidebar() {
return (
<aside className="left">
<button className="confirm-btn">Confirm</button>
<div className="nav-list">
{[...Array(5)].map((_, i) => (
<div className="nav-item" key={i}>
<img src={process.env.PUBLIC_URL + '/logo-placeholder.png'} alt="icon" />
<div>UI / UX Designers & Developers</div>
</div>
))}
</div>
</aside>
);
}