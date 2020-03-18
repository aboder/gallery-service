import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

test('Component should exist', () => {
  const app = shallow(<App />);
  expect(app).toExist();
});
