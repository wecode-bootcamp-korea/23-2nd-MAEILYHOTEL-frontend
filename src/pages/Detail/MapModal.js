import React from 'react';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../styles/Mixins';

export const MapModal = ({ isModalHandle, modalActive, name, lat, lng }) => {
  return (
    isModalHandle && (
      <MapModalSection>
        <MapModalHeader>
          <MapExit className="fas fa-times" onClick={modalActive} />
          <MapTitle>지도</MapTitle>
        </MapModalHeader>
        <MapContents>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={{
                width: '1000px',
                height: '700px',
              }}
              center={{
                lat: Number(`${lat}`),
                lng: Number(`${lng}`),
              }}
              zoom={18}
            >
              <Marker
                position={{ lat: Number(`${lat}`), lng: Number(`${lng}`) }}
              />
              <InfoWindow
                position={{
                  lat: Number(`${lat}`) + 0.00015,
                  lng: Number(`${lng}`),
                }}
              >
                <div>
                  <h1>{name}</h1>
                </div>
              </InfoWindow>
            </GoogleMap>
          </LoadScript>
        </MapContents>
      </MapModalSection>
    )
  );
};

export default React.memo(MapModal);

const MapModalSection = styled.section`
  ${boxSizeSet('100%', '100%', 'inherit', '20px')}
  z-index: 1;
  position: fixed;
  top: 0;
  max-width: 1180px;
  background-color: white;
`;

const MapModalHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  padding: 0 80px;
`;

const MapExit = styled.i`
  font-size: 20px;
  cursor: pointer;
`;

const MapTitle = styled.span`
  ${flexSet('center', 'center')};
  ${fontSet('18px', 'rgb(77,77,77)', '500')};
  line-height: 1.5;
`;

const MapContents = styled.div`
  ${flexSet('center', 'center')};
  position: relative;
  padding-top: 30px;
`;
