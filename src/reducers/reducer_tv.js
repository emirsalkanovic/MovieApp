const INITIAL_STATE = {
	tvData: []
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'RECEIVE_TV':
		
		return{
			...state,
			tvData: action.payload
		};
	}

	return state;
}