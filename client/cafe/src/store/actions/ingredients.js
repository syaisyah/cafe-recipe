import axios from 'axios'
import baseURL from '../helpers/baseURL'



export function setLoading(payload) {
  return { type: 'loading/setLoading', payload }
}

export function setError(payload) {
  return { type: 'error/setError', payload }
}

export function setIngredients(payload) {
  return { type: 'ingredients/setIngredients', payload }
}

export function addIngredient(payload) {
  return { type: 'ingredients/addIngredients', payload }
}

export function getIngredientsAsync() {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios({
      url: baseURL + '/ingredients',
      method: "GET",
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        dispatch(setIngredients(data))
      })
      .catch(err => {
        console.log(err, 'err ingredients action')
      })
      .finally(_ => dispatch(setLoading(false)))
  }
}


export function addIngredientsToDB(ingredient) {
  return (dispatch, getState) => {

    axios({
      url: baseURL + '/ingredients',
      method: "POST",
      data: ingredient,
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        dispatch(addIngredient(data))
      })
      .catch(err => {
        const { status, message } = err.response.data
        let error = { status, statusText: err.request.statusText, message }
        console.log(error)
        dispatch(setError(error))
      })
  }
}