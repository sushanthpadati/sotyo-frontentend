import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FristSlide from './1sr.jpg';
import SecondSlide from './2nd.jpg';
import ThirdSlide from './3rd.jpg';

function Slider() {
  return (
    <Carousel fade className='mb-4' style={{border:'5px solid #893487'}}>
      <Carousel.Item>
        <img src={FristSlide} className='d-block img-fluid' style={{width:'800px', height:'564px'}} alt='sotyo' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={SecondSlide} className='d-block img-fluid' alt='sotyo' style={{width:'800px', height:'564px'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ThirdSlide} className='d-block img-fluid' alt='sotyo' style={{width:'800px', height:'564px'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;