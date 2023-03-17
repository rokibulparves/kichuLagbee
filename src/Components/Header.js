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
                    <div className='row py-2'>
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
                                    <BsSearch />
                                </span>
                            </div>

                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;