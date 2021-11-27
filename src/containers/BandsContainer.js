import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  
  render() {
    // debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        <Bands 
        {...this.props}
       />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: name => dispatch({type: "ADD_BAND", name: name}),
    
    deleteBand: bandID => dispatch({ type: "DELETE_BAND", id: bandID })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 

