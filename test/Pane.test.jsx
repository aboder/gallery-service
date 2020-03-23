/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Pane from '../client/components/gallery/Pane';

describe('Pane Unit Test', () => {
  test('it should render a single input element', () => {
    const wrapper = shallow(
      <Pane
        imageUrl="https://picsum.photos/id/237/200/300"
        toggleModal={() => {}}
        index={0}
        isMain
        photoBeingHovered={false}
        hoveredPhotoIndex={0}
        handleOnHover={() => {}}
        handleOffHover={() => {}}
      />,
    );
    expect(wrapper.find('input').length).toEqual(1);
  });
  test('it should call toggleModal when a Pane is clicked', () => {
    const toggleModal = jest.fn();
    const wrapper = shallow(
      <Pane
        imageUrl="https://picsum.photos/id/237/200/300"
        toggleModal={toggleModal}
        index={0}
        isMain
        photoBeingHovered={false}
        hoveredPhotoIndex={0}
        handleOnHover={() => {}}
        handleOffHover={() => {}}
      />,
    );
    wrapper.find('input').simulate('click');
    expect(toggleModal).toHaveBeenCalledTimes(1);
  });
  test('it should apply the dim class when another picture is being hovered over', () => {
    const wrapper = shallow(
      <Pane
        imageUrl="https://picsum.photos/id/237/200/300"
        toggleModal={() => {}}
        index={0}
        isMain
        photoBeingHovered={true}
        hoveredPhotoIndex={1}
        handleOnHover={() => {}}
        handleOffHover={() => {}}
      />,
    );
    expect(wrapper.find('div').hasClass('dim')).toBe(true);
  });
});
