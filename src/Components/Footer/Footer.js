import React from 'react';
import { AiFillPhone, AiOutlineArrowRight } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import payment1 from '../../img/payment-type-1.png';
import payment2 from '../../img/payment-type-2.png';
import payment3 from '../../img/payment-type-3.png';
import payment4 from '../../img/payment-type-4.png';
import './Footer.css';

const Footer = () => {
    return (
        <section style={{background:'black'}}>
            <div className='row container mx-auto pt-5 pb-5 main-footer'>
                    <div className='col-12 col-md-4 col-lg-4 col-sm-4'>
                    <div>
                        <img className='img-fluid footer-img' src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-light.svg" alt=""/>
                    </div>
                    <h5 className='footer-content text-light'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</h5>
                    <div className='footer-contact text-light mt-3 mb-3'>
                    <h5 className='contact-footer'>Reach Out</h5>
                    <div className='small-content'>
                        <p><HiLocationMarker className='icon-design'/>Medwise Hospital<br/>
                       4038 Liberty Avenue, California</p>
                       <p><AiFillPhone className='icon-design'/>+24 123-456-7878</p>
                       <p><MdEmail className='icon-design'/>info@example.com</p>
                    </div>
                    </div>
                    </div>

                {/* second-div design */}
                    <div  className='col-12 col-md-4 col-sm-4 col-lg-4'>
                        <h4 className='footer-secondHeading'>Useful Links</h4>
                        <div className='link-footer'>
                            <p><Link to="/">Appointment</Link></p>
                            <p><Link to="/">View Departments</Link></p>
                            <p><Link to="/">Our Locations</Link></p>
                            <p><Link to="/">Facilities Available</Link></p>
                            <p><Link to="/">About Daigonostice Center</Link></p>
                        </div>
                        <button className='btn-footer btn  px-4 py-3' type="submit"><Link className='btn-design text-light' to="/">
                        <span ><Link to="https://www.facebook.com/EvercareDiagnosticFeni">Follow Us</Link></span>
                        <AiOutlineArrowRight className='arrow-followLink'/>
                        </Link></button>
                    </div>
                    {/* third-div-design */}
                    <div  className='col-12 col-md-4 col-sm-4 col-lg-4'>
                        <h4 className="footer-secondHeading">Diagonostic center Timings</h4>
                       <div>
                            <table className='table-design'>
                                    <tr >
                                        <td>Mon - Fri</td>
                                        <td>9:00 am to 6:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>10:00 am to 1:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>Weekly Off</td>
                                    </tr>
                                </table>
                       </div>
                       <div>
                            <h4  className="footer-secondHeading">Payment Accepted</h4>
                            <div>
                                <div className='d-flex payment-method'>
                                    <img className='img-fluid' src={payment1} alt=""/>
                                    <img className='img-fluid' src={payment2} alt=""/>
                                    <img className='img-fluid' src={payment3} alt=""/>
                                    <img className='img-fluid' src={payment4} alt=""/>
                                </div>
                            </div>
                       </div>
                    </div>
            </div>
            <div className='last-content '>
               <div className='container footer-lastDiv'>
                    <div className='content-name'>
                        <h5>Design By Shorab Hossain</h5>
                        </div>
                    <div>
                    <h5 className='content-copyRight'>© 2021 All Rights Reserved. Feni Evercare Diagonostie Center</h5>
                    </div>
               </div>
            </div>
        </section>
    );
};

export default Footer;