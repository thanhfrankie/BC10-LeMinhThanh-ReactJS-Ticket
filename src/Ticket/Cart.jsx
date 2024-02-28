import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    return (
      <div>Cart</div>
    )
  }
}
let mapStateToProps = (state) => {
    return {
      cart: state.cart,
    };
  };
  let mapDispatchToProps = (dispatch) => {
    return {
      handleDelete: (id) => {
        dispatch((id));
      },
      handleAddAmount: (id) => {
        dispatch((id));
      },
      handleMinusAmount: (id) => {
        dispatch((id));
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Cart)