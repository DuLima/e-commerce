// Import React Components
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import CSS
import './App.css';

// Import Components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-sign-out/sign-in-sign-out.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' component={SignInSignOutPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
