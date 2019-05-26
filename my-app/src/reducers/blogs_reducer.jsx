/**
 *  BlogsReducer reducer
 */

import {firebaseConnect} from '../firebase'
import { ADD_BLOG } from '../actions/constants';


function BlogsReducer(state = [], action) {
  switch (action.type) {
    case ADD_BLOG:
      // return [
      //   ...state,
      //   action.blog_added
      // ]
      const data  = firebaseConnect.database().ref('blogs_list')
      return data.push(action.blog_added)       // add firebase
    default:
      return state;
  }
}

export default BlogsReducer;
