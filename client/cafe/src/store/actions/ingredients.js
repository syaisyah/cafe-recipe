import axios from 'axios'
import Ingredient from '../../pages/Ingredients'
import baseURL from '../helpers/baseURL'

export function setLoading(payload) {
  return { type: 'ingredients/setLoading', payload }
}

export function setError(payload) {
  return { type: 'ingredients/setError', payload }
}

export function setIngredients(payload) {
  return { type: 'ingredients/setIngredients', payload }
}

export function addIngredient(payload) {
  return { type: 'ingredients/addIngredients', payload }
}

export function getIngredientsAsync() {
  return (dispatch, getState) => {
    // dispatch(setLoading(true))
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
        console.log(err)
        let error = { status, statusText: err.request.statusText, message }
        const { status, message } = err.response.data
        dispatch(setError(error))
      })
      .finally(_ => dispatch(setLoading(false)))
  }
}


export function addIngredientsToDB(ingredient) {
  return (dispatch, getState) => {
    // dispatch(setLoading(true))
    axios({
      url: baseURL + '/ingredients',
      method: "POST",
      data: ingredient,
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        dispatch(addIngredient(data))
        dispatch(getIngredientsAsync())
      })
      .catch(err => {
        const { status, message } = err.response.data
        let error = { status, statusText: err.request.statusText, message }
        console.log(error)
        dispatch(setError(error))
      })
      .finally(_ => dispatch(setLoading(false)))
  }
}

// edit ingredients
export function editIngredients(payload) {
  return(dispatch, getState) => {
    // dispatch(setLoading(true))
    axios({
      url: baseURL + '/ingredients/' + payload.id,
      method: "PATCH",
      data: {
        name: payload.name
      },
      headers: { access_token: localStorage.getItem('access_token') }
    })
    .then(({ data }) => {
     let temp = JSON.parse(JSON.stringify(getState().ingredients.data))
     let ingredients = temp.map(ingredient => {
       if (ingredient.id === payload.id) {
         return {
           id: ingredient.id, name: payload.name
         }
       } else {
         return ingredient
       }
     })
     dispatch(setIngredients(ingredients))
    })
    .catch(err => {
      const { status, message } = err.response.data
      let error = { status, statusText: err.request.statusText, message }
      console.log(error)
      dispatch(setError(error))
    })
    .finally(_ => dispatch(setLoading(false)))
  }
}
// delete ingredients
export function deleteIngredientInDB(id) {
  return(dispatch, getState) => {
    axios({
      url: baseURL + '/ingredients/' + id,
      method: "DELETE",
      headers: { access_token: localStorage.getItem('access_token') }
    })
    .then(_=> {
     let temp = JSON.parse(JSON.stringify(getState().ingredients.data))
     let ingredients = temp.filter(ingredient => ingredient.id !== id)
     console.log(ingredients, 'ingredients');
     dispatch(setIngredients(ingredients))
    })
    .catch(err => {
      const { status, message } = err.response.data
      let error = { status, statusText: err.request.statusText, message }
      console.log(error)
      dispatch(setError(error))
    })
    .finally(_ => dispatch(setLoading(false)))
  }
}