import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = () => {
    return (
        <div style={{backgroundColor:" #304050"}}>
            <div className='buttonLink-design pt-5 pb-5 row container mx-auto' >
                <div className='col-md-3 col-lg-3 col-md-3'>
                   <Link to='/Appointment'> <button onClick={() =>console.log('clicked this button')} className='btn btn-outline-light  px-4 py-3 single-button pe-3' type="sumit">APPOINTMENT <AiOutlineArrowRight className='icon-btn'></AiOutlineArrowRight></button></Link>
                </div>
                <div className='col-md-3 col-lg-3 col-md-3'>
                     <Link to='/VisitorGuide'><button className='btn btn-outline-light  px-4 py-3 single-button' type="sumit">VISITOR GUIDE <AiOutlineArrowRight className='icon-btn'/></button>
                     </Link>
                </div>
                <div className='col-md-3 col-lg-3 col-md-3'>
                     <button className='btn btn-outline-light  px-4 py-3 single-button' type="sumit">REFER PATIENT <AiOutlineArrowRight className='icon-btn'/></button>
                </div>
                <div className='col-md-3 col-lg-3 col-md-3'>
                    <Link to='/DoctorList'><button className='btn btn-outline-light px-4 py-3 single-button' type="sumit">FIND A DOCTOR <AiOutlineArrowRight className='icon-btn'/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ButtonLink;