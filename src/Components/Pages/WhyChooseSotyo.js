import React from 'react'
import is from './is.png';
import patient from './patient.png';
import global from './global.png';
import commn from './commn.png';
const WhyChooseSotyo = () => {
  return (
    <section className="m-0 pt-4 pb-4" style={{backgroundColor: "#893487"}}>
    <h2 className="text-center pt-4  pb-4" style={{color: "#fff"}}>Why you should choose Sotyo Care?</h2>
    <br />
    <center>
    <div className="row reveal justify-content-center">
        
        <div className="col-md-3 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={is} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-start">Innovative Solutions</h5>
                    <p className="card-text text-start">Our web app integrates cutting-edge technology to deliver personalized treatment plans, ensure optimal drug collections, and establish seamless communication channels.</p>
                </div>
            </div>
        </div>
        <div className="col-md-3 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={patient} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-start">Patient Empowerment</h5>
                    <p className="card-text text-start">We believe in tailoring treatment plans to individual needs, empowering patients to take control of their health and well-being.<br /></p>
                </div>
            </div>
        </div>
        <div className="col-md-3 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={global} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-start">Global Impact</h5>
                    <p className="card-text text-start">By addressing the challenges of customization, drug collection, and communication, we aspire to make a meaningful impact on TB care globally.<br /></p>
                </div>
            </div>
        </div>
        <div className="col-md-3 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={commn} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-start">Streamline Communication</h5>
                    <p className="card-text text-start">Facilitate seamless communication among healthcare providers, patients, and public health officials.<br /></p>
                </div>
            </div>
        </div>
    

    </div></center>
</section>
  )
}

export default WhyChooseSotyo
