import React, { Component } from 'react';
import CreatePost from "./component/createpost/CreatePost";
import Home from "./component/homescreen/Home";
import {Route, Switch} from "react-router";
import  './App.css';
import  '../node_modules/normalize.css/normalize.css';

class App extends Component {
  render() {
    return (
        <div className="App_container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/post" component={CreatePost} />
            </Switch>
        </div>
    );
  }
}

export default App;
