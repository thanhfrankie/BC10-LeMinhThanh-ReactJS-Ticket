import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Detail extends Component {
  render() {
    return (
      <div>Detail</div>
    )
  }
}
let mapStateToProps = (state) => {
    return {
      seat: state.detail,
    };
  };
  
  export default connect(mapStateToProps)(Detail);