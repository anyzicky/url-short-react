import React, { Component } from 'react';
import './App.css';
import Url from './Url';

class App extends Component {
  render() {
    return (
        <div className="container">


          <div className="jumbotron">
            <h1>Put long url here</h1>
            <div className="row">
              <div className="col-xs-12">
                <input type="text" className="form-control url" placeholder=".col-xs-2"/>
              </div>

            </div>
            <p><a className="btn btn-lg btn-success" href="#" role="button">Short me</a></p>
          </div>

          <div className="row marketing">

            <Url/>

            <Url/>
          </div>

        </div>
    );
  }
}

export default App;
