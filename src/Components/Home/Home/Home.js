import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from './../../Footer/Footer';
import ButtonLink from './../Buttonlink/ButtonLink';
import './Home.css';


const Home = () => {
    return (
        <div className='slider-image'>
                <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    {/* <img className="d-block w-100" src={firstImg1} alt="First slide"/> */}
                    {/* first slider design */}
                    <div className='main-header'>
                        <div className='content-left'>
                            <h1 className='title-header'>Committed to your <br/>Better Health</h1>
                            <p className='small-heading'>this is my first website design i am always learn about it.I have a lot of experience in this field</p>
                            <button className='btn-header btn  px-4 py-3' type="submit">
                            <span ><a href="https://www.facebook.com/EvercareDiagnosticFeni">Learn More</a></span>
                             <AiOutlineArrowRight className='arrow-followLink'/>
                        </button>
                           
                        </div>
                        <div className='img-right'>
                            {/* <img className="d-block w-100" src={firstImg1} alt="First slide"/> */}
                        </div>
                    </div>
                    </div>
                    {/* second slider design */}
                    <div className="carousel-item">
                    <div className='main-header'>
                        <div className='content-left'>
                            <h1 className='title-header'>Committed to your <br/>Better Health</h1>
                            <p className='small-heading'>this is my first website design i am always learn about it.I have a lot of experience in this field</p>
                            <button className='btn-header btn  px-4 py-3' type="submit">
                            <span ><a href="https://www.facebook.com/EvercareDiagnosticFeni">Learn More</a></span>
                             <AiOutlineArrowRight className='arrow-followLink'/>
                        </button>
                        </div>
                        <div className='img-right'>
                            {/* <img className="d-block w-100" src={firstImg2} alt="First slide"/> */}
                        </div>
                    </div>
                    </div>
                    {/* third slider design */}
                    <div className="carousel-item">
                    <div className='main-header'>
                        <div className='content-left'>
                            <h1 className='title-header'>Committed to your <br/>Better Health</h1>
                            <p className='small-heading'>this is my first website design i am always learn about it.I have a lot of experience in this field</p>
                            <button className='btn-header btn  px-4 py-3' type="submit">
                            <span ><a href="https://www.facebook.com/EvercareDiagnosticFeni">Learn More</a></span>
                             <AiOutlineArrowRight className='arrow-followLink'/>
                        </button>
                        </div>
                        <div className='img-right'>
                            {/* <img className="d-block w-100" src={firstImg1} alt="First slide"/> */}
                        </div>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon icon-style" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <marquee style={{ padding:'5px 0px',fontWeight:'700'}}>ফেনী এভার কেয়ার ডায়গনস্টিক সেন্টার । আপনাকে স্বাগতম।মানসিকভাবে সুস্থ থাকতে কিছু বিষয়কে আপনি জীবন থেকে মুছে ফেলতে হবে।😉
                    ✘আপনার অতীতে কি হয়েছিলো তা নিয়ে চিন্তিত হবেন না।☺️
                    ✘সবসময় সবাইকে খুশী রাখার চেষ্টা করবেন না, এটা সত্যিই সম্ভব না, এমনকি আপনি নিজেও সবার দ্বারা খুশী হবেন না।😊
                    ✘সবসময় নিজের সীমা ছাড়িয়ে যাওয়ার চেষ্টা করবেন না।
                    ✘চারপাশে যা ঘটছে তা নিয়ে অতিরিক্ত চিন্তা করবেন না।😊
                    ✘নিজের ইমোশনকে ভুলে যাবেন না, জীবনকে জীবিত থাকতে দিন। নিজের সুখকে ছড়িয়ে দিন।😍
                    ✘কখনো কিছুতেই আপনার স্বাস্থ্যের দিকে অবহেলা করবেন না😊
                    শারীরিক এবং মানসিক স্বাস্থ্যের প্রয়োজনে সংশ্লিষ্ট ক্ষেত্রে পরামর্শ নিন💝
                    প্রয়োজনীয় স্বাস্থ্যসেবার বিভিন্ন টিপস পেতে ফলো রাখুন Feni Evercare Diagnostic Center এবং শেয়ার করুন প্রিয়জনদের সাথে।🥰
                    ভালো থাকুন, সুস্থ থাকুন💓💓
                    আমাদের সাথেই থাকুন। 💓
                </marquee>
            </div>
            
            {/* btn-link section desing */}
            <ButtonLink></ButtonLink>
           {/* <About></About>
           <Services></Services>
           <Blog></Blog>
           <Contract></Contract> */}
           <Footer/>
        </div>
    );
};

export default Home;