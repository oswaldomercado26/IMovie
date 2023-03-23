import React from 'react';
import Titles from "../Titles";
import Carousel from "react-carousel-library"
import { BsCollectionFill } from "react-icons/bs";
import Disney from "../images/disney.jpg"
import Prime from "../images/video.jpeg"
import HBO from "../images/hbo.png"
import Netflix from "../images/netflix.jpg"
import Paramount from "../images/paramount.jpg"
function Platform() {
  return (

    <div className="min-height-screen container mx-auto px-2 my-6">
      <Titles title="PLATAFORMAS DISPONIBLES" Icon={BsCollectionFill} />
      <Carousel autoScroll={false} showArrowBg={true} sliderType="grid">
        <img src={Netflix} alt="" />
        <img src={HBO} alt="" />
        <img src={Prime} alt="" />
        <img src={Paramount} alt="" />
        <img src={Disney} alt="" />
      </Carousel>
    </div>

  );
}


export default Platform;


