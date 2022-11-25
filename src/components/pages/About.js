import React from 'react';
import AboutPic from '../../img/northwestern_profile.jpg';
import '../../css/about.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function About() {
    return (
        <div className='container'>
            <div>
                <h2>
                    About Me
                </h2>
                <div className='bioCont'>
                    <img alt='mypicture' className='img-thumbnail   myPic' src={AboutPic}/>
                    <div className='bioInfo'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quas inventore nisi praesentium. Itaque fugit maxime ullam aliquid quae odio, voluptatum necessitatibus repellendus, explicabo illo, alias accusantium asperiores dolorem exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quas inventore nisi praesentium. Itaque fugit maxime ullam aliquid quae odio, voluptatum necessitatibus repellendus, explicabo illo, alias accusantium asperiores dolorem exercitationem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

