export default function users (state = {}, action) {
	switch (action.type) {
		case 'RECEIVE_USERS':
			return {
				...state,
				...action.users
			}
		case 'CREATE_POLL' :
	      const poll = action.poll
	      const { author, id } = poll
	      console.log(state[author])
	      return {
	        ...state,
	        [author]: {
	          ...state[author],
	          polls: state[author].polls.concat([id])
	        }
	      }
		default: return state
	}
}