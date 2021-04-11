import './App.css';
import HomePage from './components/pages/hompage/homepage.component';
import { Route, Switch, } from "react-router-dom";
import ShopPage from './components/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
