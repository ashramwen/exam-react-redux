import React from 'react';
import { render, screen } from 'test-util';
import ProductsDropdown from '.';

test('Test <ProductsDropdown />', () => {
  render(<ProductsDropdown />, {
    initialState: {
      products: {
        product: [
          {
            productId: '10001',
            sku: 'styleme-exam-red',
            color: 'red',
          },
        ],
      },
    },
  });

  // option
  expect(screen.getByText('styleme-exam-red')).toBeTruthy();
});
