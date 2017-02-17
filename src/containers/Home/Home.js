import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   events: Object.assign(
    //     {},
    //     this.props.events
    //   ),
    // };
  }

  render() {
    return (
      <div>Hello Home Test</div>
    );
  }
}


function mapStateToProps(state) {
  console.log('state', state);
  return {
    events: state.events,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(recipeActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(Home);
