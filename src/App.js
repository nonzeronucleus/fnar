import React  from 'react';
import createStore from './redux/createStore';
import {StoreContext} from 'redux-react-hook';
import Display from './components/Display';
import CharacterLocationList from './components/CharacterLocationList';
import Time from './components/Time'
import PowerMeter from './components/PowerMeter';
const store = createStore();


function App() {

  return (
    <StoreContext.Provider value={store}>
      <Display />
      <CharacterLocationList />
      <Time />
      <PowerMeter />
    </StoreContext.Provider>
  );
}

export default App;
