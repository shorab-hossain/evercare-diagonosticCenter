import React from 'react';
import fbIcon from '../../../../img/facebook.png';
import appoinmentImg from '../../../../img/page-header.jpg';
import whatsappIcon from '../../../../img/whatsapp.png';
import youtubeIcon from '../../../../img/youTube.png';
import './Appointment.css';


const Appointment = () => {
    return (
        <div>
            <div className='appointment-image'>
                <img className='img-fluid' src={appoinmentImg} alt=""/>
            </div>
            <div className='row pt-4 container mx-auto'>
                <div className='col-md-6 col-sm-6 col-lg-6 col-12 appointment-left'>
                    <h3>Online Appointment Form</h3>
                    <p style={{fontWeight:'700'}}>ফরমটি পূরন করুন..</p>
                    {/* form-design */}
                    <form >
                    <div className="row">
                       <div className='d-flex justify-content-center aligns-item-center' style={{marginBottom:'10px'}}>
                        <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                       </div>
                        </div>
                        <div className='d-flex' style={{marginBottom: '10px'}} >
                            <div className="col w-50">
                                <input type="text" className="form-control full-address" placeholder="Full Address" aria-label="Full Address"/>
                            </div>
                            <div className='="mb-3 w-50'>
                            <input type="number" className='phone-number' id="tentacles" name="tentacles"
                                min="0" max="11" placeholder='Your Phone Number'/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        {/* select-icon */}
                            <select className="form-select select-time" aria-label="Default select example">
                            <option selected>Select Your Time</option>
                            <option value="1">9.00am - 12.00pm</option>
                            <option value="2">12.00pm - 4.00pm</option>
                            <option value="3">4.00pm -8.00pm</option>
                            </select>
                            {/* select-your blood-group */}
                            <select className="form-select select-time2" aria-label="Default select example">
                                <option selected>Select Your Blood Group</option>
                                <option value="1">o+</option>
                                <option value="2">o-</option>
                                <option value="3">AB+</option>
                                <option value="3">AB-</option>
                                <option value="3">B+</option>
                                <option value="3">B-</option>
                                <option value="3">A+</option>
                                <option value="3">A-</option>
                            </select>
                            {/* select-your age */}
                           <div className='d-flex align-item-center'>
                           <select className="form-select select-time3" aria-label="Default select example">
                                <option selected>Select Your Age</option>
                                <option value="1">18-40</option>
                                <option value="2">41-60</option>
                                <option value="3">61+</option>
                            </select>
                                {/* slect Gender */}
                                        <div className='gender-item'>
                                        <div className="form-check">
                                        <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label male-radio" for="flexRadioDefault1">
                                            Male
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                           </div>
                        {/* select your problem */}
                        <div className='check-box'>
                        <div className="form-check">
                            <h5 className='text-center'>Your Problem</h5>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label content-check" for="flexCheckDefault">
                            Blood pressure check
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label content-check" for="flexCheckChecked">
                         RBC count check
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label content-check" for="flexCheckChecked">
                        Bone marrow
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label content-check" for="flexCheckChecked">
                        Joint lubrication
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label content-check" for="flexCheckChecked">
                        Eye sight checkup
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label content-check" for="flexCheckChecked">
                        Liver problem
                        </label>
                        </div>
                        </div>
                        {/* describes your openion */}
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Your Openion</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        {/* form-check */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label content-check" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Book Appointment</button>
                    </form>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-6 col-12 appoinment-right'>
                    <h4>কোনো সাহায্য লাগলে যোগাযোগ করতে পারেন (Neep Help ?)</h4>
                    <p>In case of problems in filling out the form please do let us know</p>
                    <p>Fenievercaredaigonostic@gmail.com</p>
                    <p>Phone : 01843720516</p>
                    <div>
                        <p>আপনার সমস্যা যাচাই করুন (Departments)</p>
                        <ul>
                            <li>Neurology</li>
                            <li>General Health</li>
                            <li>Eye care</li>
                            <li>Blood Bank</li>
                            <li>Dental care</li>
                            <hr className='line-border' />
                        </ul>
                    </div>
                    <div>
                        <h4>আমাদের সাথে যুক্ত হোন ..(We're Social)</h4>
                        <p>Care for your loved ones by sharing our blogs with your friends & family</p>
                      <div className='social-icon'>
                            <div className='first-icon'>
                                <a href="https://www.facebook.com/EvercareDiagnosticFeni/followers"><img className='img-fluid' src={fbIcon} alt=""/></a>
                            </div>
                            <div className='second-icon'>
                                <a href="https://www.facebook.com/EvercareDiagnosticFeni/followers"><img className='img-fluid' src={youtubeIcon} alt=""/></a>
                            </div>
                            <div className='third-icon'>
                                <a href="https://www.facebook.com/EvercareDiagnosticFeni/followers"><img className='img-fluid' src={whatsappIcon} alt=""/></a>
                            </div>
                      </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Appointment;