import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free shipping over $100 & free returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline: <a href='tel:+8801795722318'>+8801795722318</a>
                            </p>
                        </div>
                    </div>

                </div>
            </header>

            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h3>
                                <Link className='text-white logo'>KichuLagbe?</Link>
                            </h3>
                        </div>
                        <div className='col-5'>
                            <div class="input-group">
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Enter Your Items" 
                                aria-label="Enter Your Items" 
                                aria-describedby="basic-addon2" 
                                />
                    
                                <span class="input-group-text" id="basic-addon2">
                                    <BsSearch className='fs-3' />
                                </span>
                            </div>

                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <Link className='d-flex align-items-center text-white gap-10'>
                                        <img src="images/compare.svg" alt="compare" />
                                        <p className='mb-0'>
                                            Compare <br /> Product
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link  className='d-flex align-items-center text-white gap-10'>
                                        <img src='images/wishlist.svg' alt='wishlist'/>
                                        <p className='mb-0'>Favourite <br/> wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center justify-content-center text-white gap-10'>
                                        <img src='images/user.svg' alt='user'/>
                                        <p className='mb-0'>Log in <br/> my account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center text-white gap-10'>
                                        <img src='images/cart.svg' alt='cart'/>
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='d-flex align-items-center gap-30'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    

                        <div className='d-flex align-items-center gap-15'>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                            <NavLink to='contact'>
                                Contact
                            </NavLink>
                            <NavLink to='about'>
                                About
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;