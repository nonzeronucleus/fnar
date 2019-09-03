import React from 'react';
import Monitor from '../Monitor';
import renderer from 'react-test-renderer';
import {useMappedState} from 'redux-react-hook';

jest.mock('redux-react-hook', () => {
  return {
    useMappedState: jest.fn()
  }
});

jest.mock('../../RadarMap', () => ()=> (<div>RadarMap</div>))
jest.mock('../DoorRelease', () => ({active})=> (<div>Door Release: {active}</div>))


it('renders correctly with a character in the room', () => {

  useMappedState.mockImplementation(() => ({
    selectedRoom:"dining room",
    charactersInRoom:[
      "rainba"
    ],
    doorRelease:null
  }))

  const tree = renderer
    .create(
        <Monitor/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with no characters in the room', () => {

  useMappedState.mockImplementation(() => ({
    selectedRoom:"dining room",
    charactersInRoom:[
    ],
    doorRelease:null
  }))

  const tree = renderer
    .create(
        <Monitor/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
