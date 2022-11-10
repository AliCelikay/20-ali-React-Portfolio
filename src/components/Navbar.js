import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>AliCelikay</h1>
            <div>
                <ul className='navbar-nav mr-auto'>
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
        </nav>
    );
}

export default Navbar;
