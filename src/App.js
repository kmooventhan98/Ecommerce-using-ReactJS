import './App.css';
import HomePage from './components/pages/hompage/homepage.component';
import { Route, Switch, } from "react-router-dom";


const HatsPage=(props)=>(
  
  <div>
    {console.log(props)}
    <h1>Hats page</h1>
    <button onClick={()=>(props.history.push('/'))}>Home</button>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/hats' component={HatsPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
