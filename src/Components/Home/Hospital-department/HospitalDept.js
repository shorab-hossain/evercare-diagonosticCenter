import React, { useEffect, useState } from 'react';
import './HospitalDept.css';

const HospitalDept = () => {
    const [card,setData] = useState([]);
    useEffect(() =>{
        fetch('./cardData.json')
        .then(response => response.json())
        .then(result => setData(result))
    },[])
    return (
        <section className=' pt-5 pb-5'>
            <div className='container'>
                <div className='hospital-title text-center '>
                    <h1 className='text-dark' style={{fontSize:'2rem',fontWeight:'700'}}>Ours Daigonostic Center Services</h1>
                    <p className='text-dark'>Our best service provided for you.we are Always  ensured of it.</p>
                </div>
                {/* card-design */}
                <div className='all-card'>
                <div className="row row-cols-1 row-cols-md-3 g-4 main-container mt-5">
                    {
                        card.map((item,index) =>
                        <div className='full-card' id={item.key}>
                            <img className='img-fuild img-hospital' src={item.img} alt=""/>
                                <h1 className='item-title'>{item.title}</h1>
                                <p className='small-title'>{item.smallContent}</p>
                        </div>)
                    }
                 </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalDept;