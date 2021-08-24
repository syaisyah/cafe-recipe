import axios from '../../helpers/axios';

export function setLoading(payload) {
  return { type: 'loading/setLoading', payload }
}
export function setError(payload) {
  return { type: 'error/setError', payload }
}

export function setMenu(payload) {
  return { type: "menu/setMenu", payload }
}

export function setMenuAsync() {
  return (dispatch, getState) => {
    //lakukan proses axios

  }
}

