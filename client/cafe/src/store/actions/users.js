import baseURL from '../helpers/baseURL'
import axios from 'axios';
import Swal from 'sweetalert2'


export function setLoading(payload) {
  return { type: 'loading/setLoading', payload }
}

export function setError(payload) {
  return { type: 'error/setError', payload }
}

export function setAccessToken(payload) {
  return { type: 'accessToken/setAccessToken', payload }
}


export default function setAccessTokenAsync(user) {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios({
      url: baseURL + '/users/login',
      method: "POST",
      data: user
    })
      .then(({ data }) => {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        localStorage.setItem('access_token', data.access_token)
        dispatch(setAccessToken(data.access_token))

      })
      .catch((err) => {
        const { status, message } = err.response.data
        let error = { status, statusText: err.request.statusText, message }
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${message}`,
        })
        dispatch(setError(error))
      })
      .finally(_ => {
        dispatch(setLoading(false))
        // user.email = "";
        // user.password = ""
      })


  }
}