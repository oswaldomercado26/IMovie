import React from 'react'
import Carousel from 'react-grid-carousel'
import Disney from '../images/disney.png'
import netflix from '../images/netflix.png'
import paramount from '../images/paramount.png'
import primevideo from '../images/primevideo.png'
import hbo from '../images/hbo.jpg'
//crear carrusel de plataformas
const Platform = () => {
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={Disney} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={netflix} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="65%" src={paramount} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={primevideo} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hbo} />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}
export default Platform;