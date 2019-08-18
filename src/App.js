import React  from 'react';
import createStore from './redux/createStore';
import {StoreContext} from 'redux-react-hook';
import Display from './components/Display';
import RadarMap from './components/RadarMap';
import CharacterLocationList from './components/CharacterLocationList';
import Time from './components/Time'
const store = createStore();


function App() {

  return (
    <StoreContext.Provider value={store}>
      <Display />
      <RadarMap />
      <CharacterLocationList />
      <Time />
    </StoreContext.Provider>
  );
}

export default App;
