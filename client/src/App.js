import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LandingDesing from './Components/landing//landing'
import Home from './Components/Home/Home';
import {Provider} from 'react-redux'
import store from './store/store';
import Detail from './Components/Details/Details';
import RecipeCreated from './Components/addRecipe/addRecipe'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LandingDesing}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/home/:id' component={Detail}></Route>
            <Route exact path= '/add' component={RecipeCreated}></Route>
            </Switch>
          </div>

    </Router>

    </Provider>
  )
}

export default App;
