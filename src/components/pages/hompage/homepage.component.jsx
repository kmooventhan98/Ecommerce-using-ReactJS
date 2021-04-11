import React from 'react';
import Directory from '../../directory/directory.component';
import './homepage.styles.scss';

const HomePage = (props)=>(
    <div className="Homepage">
        <Directory/>
        {console.log('homepage', props)}
    </div>
)

export default HomePage;