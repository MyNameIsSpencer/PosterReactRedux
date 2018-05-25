import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case DELETE_POST:
    return _.omit(state, action.payload );
    
  case FETCH_POST:
  // VVV is the ES5  way of doing things
    // const post = action.payload.data;
    // const newState = { ...state, };
    // newState[post.id] = post;
    // return newState;
// Below ES6 return VVV  has same result as above ES5 ^^^
    return {...state, [action.payload.data.id]: action.payload.data};


  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
