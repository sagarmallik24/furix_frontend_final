import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import compAnimalThumb from '../../assets/static/images/FVP 1.jpg'
import veta from '../../assets/static/images/AM30.jpg'
import br from '../../assets/static/images/DAV60.jpg'
import jyf_10b from '../../assets/static/images/JYF - 10b.jpg'
import jyf_10b_bann from '../../assets/static/images/JYF-10b_BANNER.png'
import fve_15 from '../../assets/static/images/fve-15 patient monitor.jpg'
import compAnimal from '../../assets/static/images/PANDA 4 SERIES.jpg'

const Slider = () => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} >
        {/*className='mt-1' >*/}
    <Carousel.Item interval={1000} >
      
    <img src={compAnimalThumb}  alt=".." className='img_head1' width='100%' height='550px'/>
       
    
    <Carousel.Caption>
         
           
        {/* <h2 style={{color:'black'}}>Leader in Comprehensive Animal Medical Solutions on a Global Scale.</h2> */}
          
          
          </Carousel.Caption>  
      </Carousel.Item>
      <Carousel.Item interval={1000} >
      
      <img src={jyf_10b}  alt=".." className='img_head1' width='100%' height='550px'/>
         
      
      <Carousel.Caption>
           
             
          {/* <h2 style={{color:'black'}}>Leader in Comprehensive Animal Medical Solutions on a Global Scale.</h2> */}
            
            </Carousel.Caption>  
        </Carousel.Item>
      {/*<Carousel.Item interval={4000} >
        <img src={require("./Images/sld2.jpg")}  alt=".."width='100%'  height="430px"/>
        <Carousel.Caption>
          
               
               
              <img src={require("./Images/skylan_icon.png")} alt=".."width='100%' height="105"  margin='5px'/>
                    <h3>Best place to find and explore that all you need</h3>
                
                  
                </Carousel.Caption>
  </Carousel.Item>*/}
      <Carousel.Item interval={1000} >
      <img src={veta}   alt=".." className='img_head1' width='100%' height='550px'/>
        <Carousel.Caption>
               
                       
                       
          {/* <h1 style={{color:'black'}}><b>Revolutionizing the Animal Anesthesia Machine.</b></h1> */}
          
                       
                      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
      
      <img src={jyf_10b_bann}  alt=".." className='img_head1' width='100%' height='550px'/>
         
      
      <Carousel.Caption>
           
             
          {/* <h2 style={{color:'black'}}>Leader in Comprehensive Animal Medical Solutions on a Global Scale.</h2> */}
            
            
            </Carousel.Caption>  
        </Carousel.Item>
      <Carousel.Item interval={1000}  >
        
     
      <img src={br}   alt=".." className='img_head1' width='100%' height='550px'/>
      
        <Carousel.Caption>
                       
    {/* <h1 style={{color:'black'}}><b>Setting the benchmark for 6-part differential analysis 
        <br/>with a special focus on feline compatibility.</b></h1> */}
                       
                       
                      
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
      
      <img src={fve_15}  alt=".." className='img_head1' width='100%' height='550px'/>
         
      
      <Carousel.Caption>
           
             
          {/* <h2 style={{color:'black'}}>Leader in Comprehensive Animal Medical Solutions on a Global Scale.</h2> */}
            
            
            </Carousel.Caption>  
        </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img src={compAnimal}  alt=".."width='100%'  height="550px"/>
        <Carousel.Caption>
          
               
               
{/*              
                    <h1>Safeguarding Our National Treasure: The Giant Panda</h1> */}
                
                  
                </Carousel.Caption>
  </Carousel.Item>




  
     
    
    </Carousel>
    
    </div >

  );
};

export default Slider;