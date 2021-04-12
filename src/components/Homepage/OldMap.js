import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components"

const MainDiv = styled.div`
height: 80vh;
width: 100%;
margin-top: 30px;
color: ${({ theme }) => theme.colors.specialColor};
letter-spacing: 1px;
`

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class OldMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.6938045,
      lng: 21.7651458
    },
    zoom: 15
  };

  render() {
    return (
      <MainDiv>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter = {{ lat: 49.70012, lng: 21.76556}}
          defaultZoom = { 15 }
        >
          <AnyReactComponent
            lat={49.70012}
            lng={21.76556}
            text="GABINET"
          />
        </GoogleMapReact>
      </MainDiv>
    );
  }
}

export default OldMap;


