import React from "react";
import GoogleMapReact from 'google-map-react'
import LocationPin from "../location/location.component";

import "./google-map.styles.scss";

const location = {
  address: "Oswego Township, IL, USA",
  lat: 41.6890,
  lng: 88.3434,
  zoomLevel: 17,
};

const GoogleMap = () => (
  <div className="map">
    <div className="google-map">
      { <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}  
        defaultCenter={location}
        defaultZoom={location.zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact> }
    </div>
  </div>
);

export default GoogleMap;
