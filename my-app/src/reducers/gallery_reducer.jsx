/**
 *  GalleryReducer reducer
 */

import * as firebase from 'firebase'
import { UPLOAD_IMAGE } from '../actions/constants';
import { LOAD_IMAGE } from '../actions/constants';

var storageRef = firebase.storage().ref();


function GalleryReducer(state = [], action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      var file = action.file
      var metadata = {
        contentType: action.file.type
      };
      return storageRef.child(`gallery/${action.blogID}/` + action.imgID)
                .put(file, metadata)
                .then(
                  console.log
                );
      break;
    case LOAD_IMAGE:


      break;
    default:
      return state;
  }
}

export default GalleryReducer;
