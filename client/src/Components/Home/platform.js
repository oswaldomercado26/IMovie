import React from 'react';
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Disney from "../images/disney.jpg"
import Prime from "../images/video.jpeg"
import HBO from "../images/hbo.png"
import Netflix from "../images/netflix.jpg"
import Paramount from "../images/paramount.jpg"
import { Card } from 'semantic-ui-react'
import 'react-alice-carousel/lib/alice-carousel.css';
import 'semantic-ui-css/semantic.min.css'

function Platform() {
  return (

    <div className=" px-2 my-6">
      <Titles title="PLATAFORMAS DISPONIBLES" Icon={BsCollectionFill} />
      <Card.Group itemsPerRow={5}>
        <Card raised image={HBO} />
        <Card raised image={Netflix} />
        <Card raised image={Disney} />
        <Card raised image={Paramount} />
        <Card raised image={Prime} />

      </Card.Group>

    </div>




  );
}


export default Platform;


