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



// export function findAllRecipesAsync() {
//   return (dispatch) => {
//     axios({
//       url: baseURL + '/recipes/',
//       method: "GET",
//       headers: { access_token: localStorage.getItem('access_token') }
//     })
//       .then(({ data }) => {
        
//       })
//       .catch(err => console.log(err))
//       .finally(_ => dispatch(setLoading(false)))
//   }
// }

export function getRecipeOfMenu(idMenu) {
  return (dispatch, getState) => {
    axios({
      url: baseURL + '/recipes/' + idMenu,
      method: "GET",
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        dispatch(setRecipes(data))
      })
      .catch(err => console.log(err))
      .finally(_ => dispatch(setLoading(false)))
  }
}

// edit recipe
export function editRecipeToDB(payload) {
  console.log(payload, "payload.>>> editRecipeToDB")
  return (dispatch, getState) => {
    axios({
      url: baseURL + '/recipes/' + payload.MenuId,
      method: "POST",
      data: { recipes: payload.recipes},
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(({data}) => {
      dispatch(getRecipeOfMenu(payload.MenuId))
    })
    .catch(err => console.log(err))
    .finally(_ => dispatch(setLoading(false)))
  }
}
