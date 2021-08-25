import { combineReducers } from "redux";
import menuReducer from './menuReducers'
import userReducers from './userReducers'
import ingredientReducers from './ingredientReducers'




const reducer = combineReducers({
  users: userReducers,
  menu: menuReducer,
  ingredients: ingredientReducers,
})



export default reducer;