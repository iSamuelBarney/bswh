import moment from 'moment';

const initialState = {};

export default (type) => (state = initialState, action) => {
  if (type === action?.type) {
    return {
      ...state,
      [moment().toISOString()]: action?.id,
    };
  } else {
    return state;
  }
};
