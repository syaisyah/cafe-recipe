import { Route } from 'react-router-dom';
import Login from './pages/Login';


const PrivateRoute = (props) => {
  return (
    <Route path={props.path} render={() => {
      const access_token = localStorage.getItem("access_token")
      if (access_token) {
        return props.children
      } else {
        return <Login />
      }
    }}>
    </Route>
  )
}

export default PrivateRoute;