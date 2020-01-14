import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';

import { sampleText } from './sampleText'

function App() {
  state = {
    text: sampleText
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea value={ this.state.text } className="form-control" rows="35"></textarea>
        </div>
        <div className="col-sm-6">
          <div>
            { sampleText }
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default App;
  