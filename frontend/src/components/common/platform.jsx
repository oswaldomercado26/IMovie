import React from 'react'
import Carousel from 'react-grid-carousel'
import Disney from '../images/disney.jpg'
import netflix from '../images/netflix.jpg'
import paramount from '../images/paramount.jpg'
import primevideo from '../images/prime.jpg'
import hbo from '../images/hbo.png'

  //Funciones OnClick

  function filtroPrimeVideo() {
    console.log("Diste click en Prime");
  }
  
  function filtroNetflix() {
    console.log("Diste click en Netflix");
  }
 
  function filtroParamount() {
    console.log("Diste click en Paramount");
  }
  
  function filtroDisney() {
    console.log("Diste click en Disney");
  }
  
  function filtroHBO() {
    console.log("Diste click en HBO");
  }

//crear carrusel de plataformas
const Platform = () => {
 
  return (
    <Carousel cols={3} rows={1} gap={6} loop>
      <Carousel.Item>
       <img id='primevideo' width="100%" src={primevideo} onClick={() => filtroPrimeVideo()}/>
      </Carousel.Item>
      <Carousel.Item>
        <img id='netflix' width="100%" src={netflix} onClick={() => filtroNetflix()} />
      </Carousel.Item>
      <Carousel.Item>
        <img id='paramount'width="100%" src={paramount} onClick={() => filtroParamount()}/>
      </Carousel.Item>
      <Carousel.Item>
         <img id='disney' width="100%" src={Disney} onClick={() => filtroDisney()}/>
      </Carousel.Item>
      <Carousel.Item>
        <img id='hbo' width="85%" src={hbo} onClick={() => filtroHBO()}/>
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>


  )
}
export default Platform;