import { UPDATE_COLOR } from './types';

export const updateColor = (id) => {
  return {
    type: UPDATE_COLOR,
    id,
  };
};
