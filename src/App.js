import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import BookComponent from './components/BookComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookComponent />
    </div>
    </Provider>
  );
}

export default App;
