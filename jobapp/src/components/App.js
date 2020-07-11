import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/normalize.css';
import Search from './Search';
import Header from './Header';
import ScrollTop from './ScrollTop';
import { persistStore } from 'redux-persist';
import localForage from 'localforage'
import { store } from '../store/configureStore';

persistStore(store)

class App extends Component {

// keep current state when page is refreshed
  componentDidMount() {
    persistStore(store, {
      storage: localForage,
    },
    )
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Search />
      </div>
    )
  }
}

export default App;
