import React  from 'react';
import createStore from './redux/createStore';
import {StoreContext} from 'redux-react-hook';
import Display from './components/Display';
// import CharacterLocationList from './components/CharacterLocationList';
import Time from './components/Time'
const store = createStore();


function App() {

  return (
    <StoreContext.Provider value={store}>
      <Display />
      <Time />
    </StoreContext.Provider>
  );
}


// <CharacterLocationList />

export default App;
