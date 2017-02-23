import * as types from './actionTypes';

export function getCoordinates(latitude, longitude) {
  return {
    type: types.ACTION_TYPES.GET_CURRENT_GEOLOCATION,
    payload: {
      location: {
        lat: latitude,
        lng: longitude,
      },
    },
  };
}


export function getCurrentGeoLocation() {
  return function getCurrentLoc(dispatch) {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( geoposition => {
        const {latitude, longitude} = geoposition.coords;
        dispatch(getCoordinates(latitude, longitude));
      });
    } else {
      dispatch(getCoordinates('43.653226', '-79.383184'));
    }
  };
}
