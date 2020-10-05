import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../client/src/components/ProductCard/ProductCard';

describe('ProductCard', () => {
  describe('Have props', () => {
    let component;

    beforeEach(() => {
      const { product } = {
        id: 1,
        brand: 'Zwilling ENFINIGY',
        name: 'Power Blender',
        product_features: {},
        related_products: [1, 3, 15, 21],
        image: 'https://unzwilling.s3-us-west-1.amazonaws.com/1.jpg',
        imageMini: 'https://unzwilling.s3-us-west-1.amazonaws.com/1_mini.jpg',
        price: 100,
        salePrice: 80,
        onSale: true,
        rating: 4.5,
        isFavorite: true,
      };

      component = renderer.create(
        <ProductCard product={product} />,
      );
    });

    test('snapshot renders', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
