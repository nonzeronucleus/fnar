import React from 'react';
import DoorRelease from '../DoorRelease';
import renderer from 'react-test-renderer';

it('renders correctly when not active', () => {

    const tree = renderer
        .create(
            <DoorRelease active={false} />);
    const testInstance = tree.root;

    expect(testInstance.findByProps({src:"switch-off.png"}))
    expect(tree.toJSON()).toMatchSnapshot();
});

it('renders correctly when active', () => {

    const tree = renderer
      .create(
          <DoorRelease active={true} />);
    const testInstance = tree.root;

    expect(testInstance.findByProps({src:"switch-on.png"}))

    expect(tree.toJSON()).toMatchSnapshot();
  });
