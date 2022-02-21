// Import React Components
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import CSS
import './App.css';

// Import Components
import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
