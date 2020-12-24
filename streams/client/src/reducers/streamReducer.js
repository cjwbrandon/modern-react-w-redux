import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

// Object-based approach
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case [FETCH_STREAM, CREATE_STREAM, EDIT_STREAM]:
      // Old syntax
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;

      // ES6 syntax -> Key Interpolation Syntaxs
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;

// Array-based approach
// const streamReducer = (state = [], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       return state.map((stream) => {
//         if (stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream;
//         }
//       });
//     default:
//       return state;
//   }
// };
