import moment from 'moment';
import * as actions from '@@Actions';

const initialState = {};

export default (state = initialState, action) => {
  if ([...Object.keys(actions?.TYPE || {})]?.includes(action?.type)) {
    return {
      ...state,
      [action?.type]: {
        ts: moment().toISOString(),
        action,
      },
    };
  } else {
    return state;
  }
};
