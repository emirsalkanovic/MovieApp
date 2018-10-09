const INITIAL_STATE = {
  moviesData: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RECEIVE_MOVIES':

      return {
        ...state,
        moviesData: action.payload
      };
  }

  return state;
}