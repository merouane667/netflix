import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import requests from './requests';
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom';
import Home from './Home';
import { DataCenter } from './DataCenter';



function App() {
  
  return (
    <div className="app ">
      <DataCenter>
        <Router>   
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
        </Router>

      </DataCenter>


    </div>
  );
}

export default App;
