import React from 'react';
import renderer from 'react-test-renderer';

import 'react-native-gesture-handler';
import  Login from '../src/screens/Login/Login';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});