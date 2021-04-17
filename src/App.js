import Login from './components/Login'
import './route'
import Register from './components/Register'
import Home from './components/Home'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <main>
      
        
      <Router> 
        <Route path='/login' exact render={()=> <Login/>} />
        <Switch>
            <Route path='/sign-up' exact render={()=> <Register/>}/>
            <Route path='/home' render={() => <Home/>}  />
        </Switch>


        </Router>
      
    </main>
    
  );
}

export default App;
