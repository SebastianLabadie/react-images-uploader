import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UploadImage from './components/UploadImage/UploadImage';

function App() {
  return (
    <Router>
    <div className="app">
       <Switch>
         <Route exact path="/" component={UploadImage}/>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
