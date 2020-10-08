import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_COLOR } from 'actions/types';
import { selectProduct } from 'selectors';
import styles from './ProductsDropdown.module.scss';

function ProductsDropdown() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_COLOR,
      id,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div>Dropdown (Mouse over me)</div>

        <div className={styles.content}>
          {product?.map(
            ({ productId, sku }) =>
              sku?.includes('-exam-') && (
                <div key={productId} onClick={() => handleClick(productId)}>
                  {sku}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsDropdown;
