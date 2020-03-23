/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../client/components/modal/Modal';

describe('Modal Unit Tests', () => {
  test('The wrapper should exist', () => {
    const wrapper = shallow(
      <Modal
        pictures={[{}]}
        showModal
        toggleModal={() => {}}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
