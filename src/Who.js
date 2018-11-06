import React from 'react';
import mypic from './pic.png';

const Who = () => {
    return ( 
        <div>
        
            <div className='who'>
                <div className='mypic-div'><img className="mypic" src={mypic}/></div>
                <h3 className="home-h1">Who am I?</h3><br/>
                <h4 className="obj">My quantitative skills from my business degree along with my hands-on experience as a small business owner help me to design and build customer facing applications. I hope to use these acquired skills while channeling my passion for finding cost effective, efficient solutions. My diverse cultural and academic background makes me well suited to handle quantitative tasks while interacting with people from varied backgrounds.</h4>
            </div>
            <div className='who'>
                <div className='mypic-div'><img className="mypic" src={mypic} /></div>
                <h3 className="home-h1">Who am I?</h3><br />
                <h4 className="obj">My quantitative skills from my business degree along with my hands-on experience as a small business owner help me to design and build customer facing applications. I hope to use these acquired skills while channeling my passion for finding cost effective, efficient solutions. My diverse cultural and academic background makes me well suited to handle quantitative tasks while interacting with people from varied backgrounds.</h4>
            </div>
            <div className='who'>
                <div className='mypic-div'><img className="mypic" src={mypic} /></div>
                <h3 className="home-h1">Who am I?</h3><br />
                <h4 className="obj">My quantitative skills from my business degree along with my hands-on experience as a small business owner help me to design and build customer facing applications. I hope to use these acquired skills while channeling my passion for finding cost effective, efficient solutions. My diverse cultural and academic background makes me well suited to handle quantitative tasks while interacting with people from varied backgrounds.</h4>
            </div>
        </div>
     );
}
 
export default Who;