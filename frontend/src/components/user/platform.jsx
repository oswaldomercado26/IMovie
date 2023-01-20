//Importa las imagenes 
import Carousel from 'carousel-react-rcdev'
import disney from './images/disneyplus.jpg';
import hbomax from './images/hbomax.png';
import netflix from './images/Netflix.png';
import paramount from './images/paramount.jpg';
import prime from './images/primevideo.png';

function ShowPlatforms () { //Muestra el carrusel de plataformas
    return(
        <Carousel show={3.5} slide={3} swiping={true}>
            <img src={disney} alt='Disney' title='disney' width="300px" />
            <img src={hbomax} alt='Hbomax' title='hbomax' width="300px" />
            <img src={netflix} alt='Netflix' title='netflix' width="300px" />
            <img src={paramount} alt='Paramount' title='paramount' width="300px"/>
            <img src={prime} alt='PrimeVideo' title='primevideo'  width="300px" />
        </Carousel>
    );

}

export default ShowPlatforms