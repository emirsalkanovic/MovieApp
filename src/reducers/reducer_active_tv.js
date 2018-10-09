export default function (state = null, action) {
	switch(action.type) {
		case 'TV_SELECTED':
		return action.payload;
	}

	return state;
}