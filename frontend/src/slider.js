import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import netflix from './logosPlataformas/netflix.jpg'
import disney from './logosPlataformas/disneyplus.jpg'
import hbo from './logosPlataformas/hbomax.png'
import paramount from './logosPlataformas/paramount.jpg'
import prime from './logosPlataformas/primevideo.png'
import starplus from './logosPlataformas/starplus.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sliders() {

const [SlideNumber,SetSlideNumber] = useState(0);

function sizeofscreen(){
  const windowWidth=  window.innerWidth;
  
  if (windowWidth<=900 && windowWidth>=490 ){
    SetSlideNumber(2);
    

   }
   else if(windowWidth<490){
    SetSlideNumber(1);

   }
   else {
    SetSlideNumber(3);
   }
  
}

useEffect( () => {
  window.addEventListener("resize",sizeofscreen);
  sizeofscreen();
  
},[]);
//Eventos de plataformas
const eventoNetflix = document.querySelector('#netflix')
eventoNetflix.addEventListener('click',() => console.log('Diste Click en netflix'))

const eventoDisney = document.querySelector('#disney')
eventoDisney.addEventListener('click',() => console.log('Diste Click en disney'))

const eventoHBO = document.querySelector('#hbo')
eventoHBO.addEventListener('click',() => console.log('Diste Click en hbo'))

const eventoParamount = document.querySelector('#paramount')
eventoParamount.addEventListener('click',() => console.log('Diste Click en paramount'))

const eventoPrime = document.querySelector('#prime')
eventoPrime.addEventListener('click',() => console.log('Diste Click en prime'))

const eventoStarplus = document.querySelector('#starplus')
eventoStarplus.addEventListener('click',() => console.log('Diste Click en starplus'))

if(SlideNumber>0){
  return (

    <>
    
    <h1 className="Featured"> Presentado</h1>
    {console.log(SlideNumber)}
      <Swiper
        slidesPerView={SlideNumber}
        spaceBetween={10}
        slidesPerGroup={SlideNumber}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img id="netflix" src={netflix}></img></SwiperSlide>
        <SwiperSlide><img id="disney" src={disney}></img></SwiperSlide>
        <SwiperSlide><img id="hbo" src={hbo}></img></SwiperSlide>
        <SwiperSlide><img id="paramount" src={paramount}></img></SwiperSlide>
        <SwiperSlide><img id="prime" src={prime}></img></SwiperSlide>
        <SwiperSlide><img id="starplus" src={starplus}></img></SwiperSlide>
      </Swiper>
    </>
  );
  
      }
      else{

      }
}
