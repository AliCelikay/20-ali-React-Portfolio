import React from 'react';
import '../css/navbar.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <div className='container'> */}
                <h1>Ali Celikay</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navItems" id="navbarSupportedContent">
                    <ul className='navbar-nav '>
                        <li className="nav-item active">
                            <a
                                href="#About"
                                onClick={() => handlePageChange('About')}
                                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About Me
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                href="#Portfolio"
                                onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                My Portfolio's
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                href="#Contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact Me
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                href="#Resume"
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                My Resume
                            </a>
                        </li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    );
}

export default Navbar;
