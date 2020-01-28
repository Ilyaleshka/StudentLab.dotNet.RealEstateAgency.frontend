import { actionTypes } from "../ActionTypes/UI";

export function changePage(newPageNumber) {
  return {
    type: actionTypes.PAGE_NUMBER_CHANGED,
    payload: newPageNumber
  };
}

export function changePageContentType(contentType) {
  return {
    type: actionTypes.PAGE_CONTENT_TYPE_CHANGED,
    payload: contentType
  };
}

export function changeProfileContentType(contentType) {
  return {
    type: actionTypes.PROFILE_CONTENT_TYPE_CHANGED,
    payload: contentType
  };
}

export function changePageSize(pageSize) {
  return {
    type: actionTypes.PAGE_SIZE_CHANGED,
    payload: pageSize
  };
}
