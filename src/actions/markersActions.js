import * as types from './actionTypes';

export function getFormattedMarkers(markers) {
  return {
    type: types.ACTION_TYPES.GET_MARKERS,
    payload: {
      markers: markers,
    },
  };
}


export function getMarkersList(events) {
  return function getAllMarkers(dispatch) {
    const markers = events.map((event, index) => {
      return {
        position: {
          lat: Number(event.latitude),
          lng: Number(event.longitude),
        },
        key: index,
        defaultAnimation: 2,
        showInfo: false,
        title: event.title,
        id: event.id,
      };
    });
    dispatch(getFormattedMarkers(markers));
  };
}

export function handleMarkerClick(markerId, showInfo) {
  // console.log('this.props.markers', this.props.markers);
  // debugger;

  return {
    type: types.ACTION_TYPES.SHOW_MARKER_POPOVER,
    payload: {
      markerId,
      showInfo,
    },
  };
  // console.log('tra', markerId, showInfo);
}
