import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AllPirates from './components/AllPirates';
import PirateForm from './components/PirateForm';
import ShowPirate from './components/ShowPirate';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path='/pirates'>
      <AllPirates/>
    </Route>
    <Route exact path='/pirate/new'>
      <PirateForm/>
    </Route>
    <Route exact path='/pirate/:id'>
      <ShowPirate/>
    </Route>
    <Redirect from="/" to="/pirates" noThrow/> 
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
