import { combineReducers } from "redux";
import menuReducer from './menuReducers'
import userReducers from './userReducers'
import ingredientReducers from './ingredientReducers'
import recipeReducers from './recipeReducers'



const reducer = combineReducers({
  users: userReducers,
  menu: menuReducer,
  ingredients: ingredientReducers,
  recipes: recipeReducers
})



export default reducer;