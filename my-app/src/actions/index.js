import { ADD_BLOG } from './constants';
import { UPLOAD_IMAGE } from './constants';

export function addBlog (payload) {
    return {
        type: ADD_BLOG,
        payload
    }
}
export function uploadImage (payload) {
    return {
        type: UPLOAD_IMAGE,
        payload
    }
}
