
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

const renderRoutes = () => {
    <Router> 
        <Switch>
            <Route path='/sign-up' exact render={()=> <Register/>}/>
        </Switch>

    </Router>
 
}