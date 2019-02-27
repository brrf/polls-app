export default function polls (state = {}, action) {
	switch (action.type) {
		case 'RECEIVE_POLLS':
			return {
				...state,
				...action.polls
			}
		case 'CREATE_POLL':
			return {
				...state,
				[action.poll.id]: action.poll
			}
		default: return state
	}
}