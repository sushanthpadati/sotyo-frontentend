import React from 'react'
import rga from './rga.svg';
const Mission = () => {
  return (
    <>
        <section>
            <div className="row">
                <div className="col-md-6 reveal d-flex align-items-center justify-content-center">
                    <img src={rga} alt="sotyoimage" width="800px" height="300px" className="img-fluid mr-4 mb-0 image-content" />
                    
                </div>
                <div className="col-md-6 reveal mt-4 d-flex align-items-center ">
                    <div className="container">
                    <h2 style={{color: "#000000",fontWeight:"700" }}>Our Mission<br /><hr style={{color:"#893487",width:"20%"}} /></h2>
                    <br />
                    <h3 className="mt-4" style={{color: "#893487"}}>Empower Patients:</h3>
                    <p style={{color: "#635f63"}}> Provide personalized treatment plans that cater to individual needs. Optimize Drug Collections: Ensure timely and complete drug collections to prevent interruptions and resistance.</p>
                    <br />
                    <h3 className="mt-4" style={{color: "#893487"}}>Streamline Communication:</h3>
                    <p style={{color: "#635f63"}}> Facilitate seamless communication among healthcare providers, patients, and public health officials.</p>
                    <br />
                    <h3 className="mt-4" style={{color: "#893487"}}>Reduce the Burden:</h3>
                    <p style={{color: "#635f63"}}> Alleviate the burden of TB on individuals and communities through proactive and effective care. </p>

                        <a className="btn mt-4" href="#" style={{color: "#893487",fontWeight:"800"}}>Learn More  </a>
                    </div>
                </div>
            </div>
        </section>
        
</>
  )
}

export default Mission
