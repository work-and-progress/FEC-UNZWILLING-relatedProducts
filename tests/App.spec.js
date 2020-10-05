import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';
import Carousel from '../client/src/components/Carousel/Carousel';
// import ProductCard from '../client/src/components/ProductCard/ProductCard';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the Features Details Component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Carousel).length).toEqual(1);
  });

  // test('renders the Image Viewer Component', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find(ProductCard).length).toEqual(1);
  // });
});

describe('My Test Suite', () => {
  test('My Test Case', () => {
    expect(true).toEqual(true);
  });
});