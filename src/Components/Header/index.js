import React from 'react'
import Logo from '../../assets/images/Logo.jpg'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";



import CountryDropdown from '../CountryDropdown';
const Header =() =>{
    return(
        <>
        <div className='headerWrapper'>
            <div className='top-strip bg-orange'>
                <div className="container ">
                    <p className='mb-0 mt-0 text-center'>Customer satisfaction is our happiness</p>
                </div>
            </div>


            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center col-sm-1'>
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>

                        <div className='col-sm-11 d-flex align-items-center part2'>
                            <CountryDropdown/>

                            {/*Header Search start here */}

                                <div className="headerSearch ms-5 me-5">
                                    <input type="text" placeholder="Search..." />
                                    <Button>
                                        <IoSearchOutline className="searchIcon" />
                                    </Button>
                                </div>
                            {/*Header Search end here */}
                            <div className='part3 ml-4 me-4 d-flex align-items-center'>
                                <Button className='circle me-3'>
                                    <FiUser/>
                                </Button>
                                <div className='cartTab d-flex align-items-center '>
                                    <span className='price'>$3.23</span>
                                    <div className=' position-relative'>
                                        <Button className='circleShop  ms-4'><LuShoppingCart/></Button>
                                        <span className='cartCount position-absolute'>1</span>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
        </>
    )
}
export default Header