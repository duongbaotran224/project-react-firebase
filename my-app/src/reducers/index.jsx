import { combineReducers } from 'redux'
import blogs from './blogs_reducer'
import gallery from './gallery_reducer'

export default combineReducers({
  blogs,
  gallery
})
