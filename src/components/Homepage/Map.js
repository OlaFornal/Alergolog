import React, { Component } from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import styled from "styled-components"
import ReceptionHours from "./ReceptionHours"

const MainDiv = styled.div`
height: 80vh;
width: 100%;
margin-top: 30px;
color: ${({ theme }) => theme.colors.specialColor};
letter-spacing: 1px;
`

const InfoBox = styled.div`
width: 30%;
z-index: 5;
background-color: ${({ theme }) => theme.colors.specialColor};
height: 80vh;
position: relative;
top: -80vh;
left: 0;

${({ theme }) => theme.media.phoneLandscape} {
display: none;
}

${({ theme }) => theme.media.phone} {
display: none;
}
`

function Map() {
  return (
    <>
      <GoogleMap
        defaultCenter={{ lat: 49.70012, lng: 21.76556 }}
        defaultZoom={15}/>
      <Marker position={{ lat: 49.70009, lng: 21.765445 }}/>
    </>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

class MapOfKrosno extends Component {
  render() {
    return (
      <>
        <MainDiv>
          <WrappedMap
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div style={{ height: "100%" }}/>}
            containerElement={<div style={{ height: "100%" }}/>}
            mapElement={<div style={{ height: "100%" }}/>}>
          </WrappedMap>
          <InfoBox><ReceptionHours/></InfoBox>
        </MainDiv>
      </>
    )
  }
}

export default MapOfKrosno
