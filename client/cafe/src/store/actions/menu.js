import axios from 'axios'
import baseURL from '../helpers/baseURL'

export function setLoading(payload) {
  return { type: 'menu/setLoading', payload }
}
export function setError(payload) {
  return { type: 'menu/setError', payload }
}

export function setMenu(payload) {
  return { type: "menu/setMenu", payload }
}
export function addMenu(payload) {
  return { type: 'menu/addMenu', payload }
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

export function addMenuToDB(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios({
      url: baseURL + '/menu',
      method: "POST",
      data: payload,
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        dispatch(addMenu(data.dataMenu))
        dispatch(getAllMenuAsync())
      })
      .catch(err => console.log(err))
      .finally(_ => dispatch(setLoading(false)))
  }
}

// edit Menu

export function editMenuToDB(payload) {
  return (dispatch, getState) => {
    axios({
      url: baseURL + '/menu/' + payload.id,
      method: "PUT",
      data: {
        name: payload.name,
        image: payload.image
      },
      headers: { access_token: localStorage.getItem('access_token')}
    })
    .then(({data}) => {
       let menu = JSON.parse(JSON.stringify(getState().menu.data));
       let updateMenu = menu.map((item, i) => {
         if (item.id === payload.id) {
          return {
            id: payload.id,
            name: payload.name,
            image: payload.image
          }
         } else {
           return item
         }
       })
       dispatch(setMenu(updateMenu))
    })
    .catch(err => console.log(err))
    .finally(_ => dispatch(setLoading(false)))
  }
}

//delete menu
export function deleteMenuInDB(id) {
  return (dispatch, getState) => {
    axios({ 
      url: baseURL + '/menu/' + id,
      method: "DELETE",
      headers: { access_token: localStorage.getItem('access_token')}
    })
    .then(_ => {
      let menu = JSON.parse(JSON.stringify(getState().menu.data));
      let newMenu = menu.filter(item => item.id !== id)
      dispatch(setMenu(newMenu))
    })
    .catch(err => console.log(err))
    .finally(_ => dispatch(setLoading(false)))
  }
}

