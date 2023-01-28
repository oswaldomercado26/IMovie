import React from 'react'
import Carousel from 'react-grid-carousel'

const Platform = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="../../../public/disney.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="../../../public/hbo.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="../../../public/netflix.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="../../../public/paramount.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="../../../public/primevideo.png" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}
export default Platform;