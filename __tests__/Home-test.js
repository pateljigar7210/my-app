import React from 'react';
import renderer from 'react-test-renderer';

import 'react-native-gesture-handler';
import  Home from '../src/screens/Home/Home';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});