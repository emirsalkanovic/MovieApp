const INITIAL_STATE = {
  videoShow: []
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
		case 'VIDEO_SHOW':

		return{
			...state,
			videoShow: action.payload
		};
	}

		return state;
	
}