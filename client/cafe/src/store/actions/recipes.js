import axios from "axios"
import baseURL from "../helpers/baseURL";

export function setLoading(payload) {
  return { type: 'loading/setLoading', payload }
}

export function setError(payload) {
  return { type: 'error/setError', payload }
}

export function setRecipes(payload) {
  return { type: 'recipes/setRecipes', payload }
}




export function getRecipeOfMenu(idMenu) {
  return (dispatch, getState) => {

    axios({
      url: baseURL + '/recipes/' + idMenu,
      method: "GET",
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        console.log(data, '>>>>')
        dispatch(setRecipes(data))
      })
      .catch(err => console.log(err))
      .finally(_ => dispatch(setLoading(false)))
  }
}