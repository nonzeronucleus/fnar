import React  from 'react';
import createStore from './redux/createStore';
import {StoreContext} from 'redux-react-hook';
import ScrollableImage from './components/ScrollableImage'
import CharacterLocationList from './components/CharacterLocationList'

const store = createStore();


function App() {

  return (
    <StoreContext.Provider value={store}>
      <ScrollableImage />
      <CharacterLocationList />
    </StoreContext.Provider>
  );
}

export default App;
