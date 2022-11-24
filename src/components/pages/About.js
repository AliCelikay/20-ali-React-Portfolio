import React from 'react';
import AboutPic from '../../img/northwestern_profile.jpg';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function About() {
    return (
        <div className='container'>
            <div>
                <h2>
                    About Me
                </h2>
                <div>
                    <img alt='mypicture' src={AboutPic}/>
                    <div>
                        <p>
                            Hi, my name is Ali Celikay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

