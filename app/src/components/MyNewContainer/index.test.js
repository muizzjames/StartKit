import 'react-native';
import React from 'react';
import { MyNewContainer } from './index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MyNewContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
