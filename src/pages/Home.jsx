import React from 'react';
import img from '../image/3acd92aa-f7c5-4a94-b612-197bff456042.jpg';
import { Carousel } from 'antd';



const Home = () => {
  const contentStyle = {
    width: '200px',
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#a4b08f',
  };
    


  return (
    <div>
      
        
        <div className='block'>
          <img src={img}  alt='' />
          <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
        </div>
        <div>
          <h2>Популярные категории</h2>
        </div>
    
        
    </div>
  )
}

export default Home;
