import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './VideoDoctor.css';

const VideoDoctor = () => {
    return (
        <div className='video-section'>
            <div className=' videoCall'>
                <div className='container main-videoSection'>
                <div className='col-12 col-md-6 col-lg-6 col-sm-6 video-section' >
                    
                    </div>
                   <div className='col-12 col-md-6 col-lg-6 col-sm-6 left-section'>
                       <h4 className='heading-video'>Get Online Consultations</h4>
                        <p>If you will join us with our diagonostice center doctor then you are click this below button and describes your problem. you will solve in your problem .Thank You</p>
                        <button className='btn-video btn  px-4 py-3' type="submit"><Link className='btn-design text-light' to="/">
                        <span ><Link to="https://meet.google.com/gdh-ggvu-gnn">Start Video Cheat</Link></span>
                        <AiOutlineArrowRight className='arrow-followLink'/>
                        </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDoctor;