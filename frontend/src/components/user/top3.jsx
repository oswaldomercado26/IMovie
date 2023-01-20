// import disney from './images/disneyplus.jpg';
// import prime from './images/primevideo.png';
// import netflix from './images/Netflix.png';
// import number1 from './images/number_1.png';
// import number2 from './images/number_2.png';
// import number3 from './images/number_3.png';
// import { CCard } from '@coreui/react';

// export default function top3() {
// <CCardGroup>
//   <CCard>
//     <CCardImage orientation="top" src="/images/react.jpg" />
//     <CCardBody>
//       <CCardTitle>Card title</CCardTitle>
//       <CCardText>
//         This is a wider card with supporting text below as a natural lead-in to additional content.
//         This content is a little bit longer.
//       </CCardText>
//     </CCardBody>
//     <CCardFooter>
//       <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//     </CCardFooter>
//   </CCard>
//   <CCard>
//     <CCardImage orientation="top" src="/images/react.jpg" />
//     <CCardBody>
//       <CCardTitle>Card title</CCardTitle>
//       <CCardText>
//         This card has supporting text below as a natural lead-in to additional content.
//       </CCardText>
//     </CCardBody>
//     <CCardFooter>
//       <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//     </CCardFooter>
//   </CCard>
//   <CCard>
//     <CCardImage orientation="top" src="/images/react.jpg" />
//     <CCardBody>
//       <CCardTitle>Card title</CCardTitle>
//       <CCardText>
//         This is a wider card with supporting text below as a natural lead-in to additional content.
//         This card has even longer content than the first to show that equal height action.
//       </CCardText>
//     </CCardBody>
//     <CCardFooter>
//       <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//     </CCardFooter>
//   </CCard>
// </CCardGroup>
// }
 import disney from './images/disneyplus.jpg';
 import prime from './images/primevideo.png';
 import netflix from './images/Netflix.png';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Top3() {
  return (
    <>
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={disney} fluid alt='...' width={100}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Disney</MDBCardTitle>
        <MDBBtn href='#'>Ver Mas</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      <br />

      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={prime} fluid alt='...' width={100}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Primevideo</MDBCardTitle>
        <MDBBtn href='#'>Ver Mas</MDBBtn>
      </MDBCardBody>
    </MDBCard>

      <br />

      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={netflix} fluid alt='...' width={100} />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Netflix</MDBCardTitle>
        <MDBBtn href='#'>Ver Mas</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </>
  );
}
