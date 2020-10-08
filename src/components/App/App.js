import React from 'react';
import { useSelector } from 'react-redux';
import { selectMyProduct } from 'selectors';
import ProductsDropdown from '../ProductsDropdown';

const App = () => {
  const myProduct = useSelector(selectMyProduct);

  return (
    <div>
      <ProductsDropdown />
      <span>
        My product color: <span className="color">{myProduct?.color}</span>
      </span>
    </div>
  );
};

export default App;
