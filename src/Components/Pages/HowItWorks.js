import React from 'react'
import a1 from './a1.png';
import a3 from './a3.png';
import a4 from './a4.png';
const HowItWorks = () => {
  return (
    <>
    <section className="pt-4 pb-4" style={{backgroundColor:"#f4f4f4"}}>
        <h2 className="text-center pt-4 pb-4" style={{color:"#893487",fontWeight:"800"}}>HOW IT WORKS</h2>
            <div className="container text-center">
                <div className="row reveal">
                    <div className="col-md-4 mb-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="circle-container">
                                <img src={a1} alt="Image 1" className="img-fluid rounded-circle mb-3" width="150" height="150" />
                            </div>
                            <h4 style={{color:'#893487',fontWeight:'700'}}>STEP 1</h4>
                            <p>Create Patient Profile</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="circle-container">
                                <img src={a3} alt="Image 2" className="img-fluid rounded-circle mb-3" width="150" height="150" />
                            </div>
                            <h4 style={{color:'#893487',fontWeight:'700'}}>STEP 2</h4>
                            <p>Enter their diagnosis details</p>
                        </div>
                    </div>
                    

                    
                    <div className="col-md-4 mb-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="circle-container">
                                <img src={a4} alt="Image 3" className="img-fluid rounded-circle mb-3" width="150" height="150" />
                            </div>
                            <h4 style={{color:'#893487',fontWeight:'700'}}>STEP 3</h4>
                            <p>Generate the treatment plan</p>
                        </div>
                    </div>
                    <em style={{color:"#635f63"}}>Sotyo Care send the notification alert to patient for take medicine</em>
                </div>
            </div>
    </section>
    </>
  )
}

export default HowItWorks
