import React from 'react';
import { CContainer,CRow,CCol,CCard,CCardImage,CCardBody,CCardTitle,CCardText } from '@coreui/bootstrap-react';
import netflix from '../images/netflix.png';
import Container from "./Container";


const Top3 = () => {
<CContainer>
  <CRow>
    <CCol xs={{ span: true, order: 'last' }}>First in DOM, ordered last</CCol>
    <CCol>Second in DOM, unordered</CCol>
    <CCol xs={{ span: true, order: 'first' }}>Third in DOM, ordered first</CCol>
  </CRow>
</CContainer>
};
export default Top3;
