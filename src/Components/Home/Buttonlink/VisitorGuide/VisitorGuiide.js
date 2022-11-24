import React from 'react';
import slideImg1 from '../../../../img/first.imgSlide.jpg';
import appoinmentImg from '../../../../img/page-header.jpg';
import slideImg2 from '../../../../img/second.imgSlide.jpg';
import slideImg3 from '../../../../img/third.imgSlide.jpg';
import './VisitorGuiide.css';

const VisitorGuiide = () => {
    return (
        <div>
            <div className='appointment-image '>
                <img className='img-fluid ' src={appoinmentImg} alt=""/>
            </div>
            <div className='row container mx-auto main-sectionGuide'>
                <div className='col-md-6 col-lg-6 col-sm-6 col-12 full-guide'>
                    <span style={{color:'blue'}}>Established History</span>
                    <h4>Get to know us more about Our Daigonostic center</h4>
                    <p>Our main vission is weak people as if they are not die crisis in treatment. I hope that we will work at together. Inn sha allah we can treatment those people.Our first attempt sitting  good doctor. They will treatment all people is very carefully</p>
                    
                </div>
                <div className='col-md-6 col-lg-6 col-sm-6 col-12'>
                    <img src={appoinmentImg} className="img-fluid guide-img" alt=""/>
                </div>
            </div>
            {/* card-design */}
            {/* patient-testimonial */}
            <div className=' mb-5 pb-5 pt-5' style={{backgroundColor:'rgb(236 236 236)'}}>
               <div className='container'>
               <div>
                <h3 className='text-center fw-bold'>Patient Testimonial</h3>
                <p className='mt-2 text-center mb-4'>There live the blind texts separated they right at the coast of the Semantics.</p>
                <hr style={{border:'1px solid gray'}}/>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div>
                        <p className='text-center'>Our main vission is weak people as if they are not die crisis in treatment. I hope that we will work at together. Inn sha allah we can treatment those people.Our first attempt sitting  good doctor. They will treatment all people is very carefully</p>
                        <p className='fw-bold text-center' style={{fontWeight:700}}>Chares Bebes</p>
                        <p className='text-center' style={{lineHeight:'10px',marginBottom:'20px'}}>Bangladesh</p>
                    </div>
                    <div>
                            
                    </div>
                    <div className='slide-img'>
                         <img className="d-block img-fluid" src={slideImg1} alt="First slide"/>
                         <img className="d-block img-fluid" src={slideImg2} alt="First slide"/>
                         <img className="d-block img-fluid" src={slideImg3} alt="First slide"/>
                    </div>
                </div>
                {/* second-slider-design */}
                <div className="carousel-item">
                <div>
                        <p className='text-center'>Our main vission is weak people as if they are not die crisis in treatment. I hope that we will work at together. Inn sha allah we can treatment those people.Our first attempt sitting  good doctor. They will treatment all people is very carefully</p>
                        <p className='fw-bold text-center' style={{fontWeight:700}}>Chares Bebes</p>
                        <p className='text-center' style={{lineHeight:'10px',marginBottom:'20px'}}>Bangladesh</p>
                    </div>
                    <div>
                            
                    </div>
                    <div className='slide-img'>
                         <img className="d-block img-fluid" src={slideImg1} alt="First slide"/>
                         <img className="d-block img-fluid" src={slideImg2} alt="First slide"/>
                         <img className="d-block img-fluid" src={slideImg3} alt="First slide"/>
                    </div>
                </div>
                {/* third-slider-design */}
                <div className="carousel-item">
                <div>
                        <p className='text-center'>Our main vission is weak people as if they are not die crisis in treatment. I hope that we will work at together. Inn sha allah we can treatment those people.Our first attempt sitting  good doctor. They will treatment all people is very carefully</p>
                        <p className='fw-bold text-center' style={{fontWeight:700}}>Chares Bebes</p>
                        <p className='text-center' style={{lineHeight:'10px',marginBottom:'20px'}}>Bangladesh</p>
                    </div>
                    <div>
                            
                    </div>
                    <div className='slide-img'>
                         <img className="d-block img-fluid" src={slideImg1} alt="First slide"/>
                         <img className="d-block img-fluid" src={slideImg2} alt="First slide"/>
                         <img className="d-block img-fluid" src={slideImg3} alt="First slide"/>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
               </div>
                </div>
                    </div>
                );
};

export default VisitorGuiide;