import axios from 'axios'
import baseURL from '../helpers/baseURL'

export function setLoading(payload) {
  return { type: 'loading/setLoading', payload }
}
export function setError(payload) {
  return { type: 'error/setError', payload }
}

export function setMenu(payload) {
  return { type: "menu/setMenu", payload }
}

export function getAllMenuAsync() {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios({
      url: baseURL + '/menu',
      method: "GET",
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        dispatch(setMenu(data))
      })
      .catch(err => console.log(err, 'action getMenuAsync >>>'))
      .finally(_ => dispatch(setLoading(false)))
  }
}

