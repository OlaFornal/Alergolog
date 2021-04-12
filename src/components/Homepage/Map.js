import React, { useState, Component } from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"
import styled from "styled-components"

const MainDiv = styled.div`
height: 80vh;
width: 100%;
margin-top: 30px;
color: ${({ theme }) => theme.colors.specialColor};
letter-spacing: 1px;
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
      <MainDiv>
        <WrappedMap
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: "100%" }}/>}
          containerElement={<div style={{ height: "100%" }}/>}
          mapElement={<div style={{ height: "100%" }}/>}
        />
      </MainDiv>
    )
  }
}

export default MapOfKrosno
