import React from 'react';
import { render, screen, fireEvent } from 'test-util';
import App from '.';

const initialState = {
  products: {
    product: [
      {
        productId: '10001',
        sku: 'styleme-exam-red',
        color: 'red',
      },
      {
        productId: '10002',
        sku: 'styleme-exam-blu',
        color: 'blue',
      },
    ],
    myProduct: {
      productId: '10001',
      sku: 'styleme-exam-red',
      color: 'red',
    },
  },
};
describe('Test <App />', () => {
  test('Test rendering', () => {
    render(<App />, { initialState });

    // my product color
    expect(screen.getByText('red')).toBeTruthy();
  });

  test('Test clicking', () => {
    render(<App />, { initialState });

    // click the option
    const option = screen.getByText('styleme-exam-blu');
    fireEvent.click(option);
    expect(screen.getByText('blue')).toBeTruthy();
  });
});
