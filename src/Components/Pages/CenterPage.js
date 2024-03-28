import React from 'react'
// import hs from './hs.png';
import Slider from './Slider';
const CenterPage = () => {
  return (
    <div class="container-fluid">
    <section>
        <div class="row">
            <div class="col-md-6 d-flex align-items-center ">
                <div class="container-fluid animate-from-bottom">
                    <h1 class="animate-from-bottom" style={{textAlign:"left",color:'#000000',fontSize:'4rem'}}>Welcome to <b style={{color: "#893487"}}>Sotyo</b> </h1>
                    <h3 class="mt-4 mb-4" style={{fontSize:'2rem',color:'#893487'}}>Transforming Treatment Globally</h3>
                    <p class="mt-4 mb-4" style={{fontSize:'1.2rem',color:'#635f63'}}>At Sotyo Care, we are on a mission to reshape the landscape of tuberculosis (TB) care worldwide. TB remains a formidable global health crisis, affecting millions of lives each year. Join us in our commitment to leveraging technology to empower patients, optimize drug collections, and streamline communication, ultimately reducing the burden of TB on individuals and communities.</p>
                    <div class="mt-4">
                        <a href="#" class="btn btn-lg mr-4" style={{backgroundColor:'#893487',color:'#fff',padding: '10px 20px'}}>Get Started</a>
                    </div>
                </div>
            </div>
        
            <div class="col-md-6 d-flex mt-4 align-items-center justify-content-center animate-from-right mb-4">
                <Slider />
                
            </div>
        </div>
        
        
            
      
    </section>
</div>
  )
}

export default CenterPage
