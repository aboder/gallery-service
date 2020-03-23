/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../client/components/gallery/Gallery';

describe('Gallery Unit Tests', () => {
  test('The gallery should exist', () => {
    const wrapper = shallow (
      <Gallery
        toggleModal={() => {}}
        showModal={false}
        pictures={[{}]}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
