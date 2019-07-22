import React from 'react';
import createStore from './redux/createStore';
import {StoreContext} from 'redux-react-hook';
import ScrollableImage from './components/ScrollableImage'

const store = createStore();


function App() {
  return (
    <StoreContext.Provider value={store}>
    <ScrollableImage />
    </StoreContext.Provider>
  );
}

export default App;
