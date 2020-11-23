import moment from 'moment';
import * as actions from '@@Actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action?.id) {
    case actions?.ID?.FETCH_USERS: {
      if (!action?.data?.length) return state;
      const usersObj = {};
      for (let i = 0; i < action.data.length; i += 1) {
        usersObj[action?.data?.[i]?.username || 'MISSING_USERNAME'] =
          action?.data?.[i] || {};
      }
      return {
        ...usersObj,
      };
    }
    default: {
      return state;
    }
  }
};
