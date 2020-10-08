import { UPDATE_COLOR } from 'actions/types';

export const initialState = {
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
    {
      productId: '10003',
      sku: 'styleme-product-grn',
      color: 'green',
    },
    {
      productId: '10004',
      sku: 'styleme-exam-ylw',
      color: 'yellow',
    },
    {
      productId: '10005',
      sku: 'styleme-exam-blk',
      color: 'black',
    },
    {
      productId: '10006',
      sku: 'styleme-dev-wht',
      color: 'white',
    },
  ],
  myProduct: {},
};

function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case UPDATE_COLOR: {
      const selected =
        state?.product?.find(({ productId }) => productId === action.id) ?? {};
      return { ...state, myProduct: selected };
    }
    default:
      return state;
  }
}

export default reducer;
