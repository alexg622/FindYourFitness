import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Strength from './components/Strength'
import { Provider } from 'react-redux'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Route exact path="/strength" component={ Strength }/>
            <Route exact path="/" component={ Home }/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
