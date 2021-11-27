import uuid from "uuid";

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {

    case "ADD_BAND":
      const band = {
        id: uuid,
        name: action.name
      }
      // console.log({...state, bands: state.bands.concat(band)})
      return {...state, bands: [...state.bands, band]}
      
      case "DELETE_BAND":
        // debugger
        console.log(action)
        // return {bands: state.bands.filter((band) => band.id !== action.id) }
        const newArray = state.bands.filter((band) => band.id !== action.id)
        return {bands: newArray }


    default:
      return state
  
  }
};
