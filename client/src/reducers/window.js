import { EXTEND_DRAWER, SHRINK_DRAWER } from '../actions/windowTypes';

const initialState = {
  drawerExtended: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXTEND_DRAWER:
      return { ...state, drawerExtended: true };

    case SHRINK_DRAWER:
      return { ...state, drawerExtended: false };

    default:
      return state;
  }
};
