import React from 'react';

import './menu-item.styles.scss';

//purpose of this component to display individual menu item on the page
//relevant data are passed by destructuring the props object
const MenuItem = ({ title, imageUrl, size }) => (
    <div className= { `${size} menu-item` }>
        <div className='background-image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;