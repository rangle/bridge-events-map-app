import { default as React } from 'react';
import {Link} from 'react-router';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MainGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 43.653226, lng: -79.383184 }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onClick={() => props.onMarkerClick(marker.key, true)}
        >
          {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClick(marker.key, false)}>
            <Link to={'/EventDetails/' + marker.id}>
              <div>{marker.title}</div>
            </Link>
          </InfoWindow>
          )}
      </Marker>
    ))}
  </GoogleMap>
));

export default MainGoogleMap;
