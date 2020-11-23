import moment from 'moment';
import * as actions from '@@Actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action?.id) {
    case actions?.ID?.FETCH_USERS: {
      if (!action?.data) return state;
      return {
        users: action?.data,
        ts: moment().toISOString(),
      };
    }
    default: {
      return state;
    }
  }
};
