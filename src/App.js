import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './components/Index';
import WellsList from './components/WellsList';
import WellAdd from './components/WellAdd';
import History from './components/WellHistory';
import Register from './components/Register';
import WellShowById from './components/WellShowById';
import Login from './components/login';
import GetWellByUWID from './components/getWellByUWID';



function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" exact component={Index} />
        <Route path="/wells" exact component={WellsList} />
        <Route path="/wells/add" exact component={WellAdd} />
        <Route path="/wells/well/:id" exact component={WellShowById} />
        <Route path="/wells/well" exact component={GetWellByUWID} />
        <Route path="/wells/:id/history" exact component={History} />
        <Route path="/admin/register" exact component={Register} />
        <Route path="/admin/authenticate" exact component={Login} />
      </React.Fragment>
    </Router>
  );
}



export default App;
