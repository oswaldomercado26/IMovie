import React from 'react'
import Carousel from 'react-grid-carousel'
import Disney from '../images/disney.jpg'
import netflix from '../images/netflix.jpg'
import paramount from '../images/paramount.jpg'
import primevideo from '../images/prime.jpg'
import hbo from '../images/hbo.png'
//crear carrusel de plataformas
const Platform = () => {
  return (
    <Carousel cols={3} rows={1} gap={6} loop>
      <Carousel.Item>
       <img width="100%" src={primevideo} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={netflix} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={paramount} />
      </Carousel.Item>
      <Carousel.Item>
         <img width="100%" src={Disney} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="85%" src={hbo} />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}
export default Platform;