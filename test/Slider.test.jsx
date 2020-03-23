/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../client/components/modal/Slider';

describe('Slider Unit Tests', () => {
  test('The slider should exist', () => {
    const wrapper = shallow (
      <Slider
        currentPicture={0}
        pictures={[{}]}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
