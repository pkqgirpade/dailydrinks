import { BrowserRouter, Switch, Route } from "react-router-dom";

//import pages
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
