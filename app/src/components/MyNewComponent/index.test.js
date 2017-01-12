import 'react-native';
import React from 'react';
import MyNewComponent from './index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MyNewComponent />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
