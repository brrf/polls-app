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
	      return {
	        ...state,
	        [author]: {
	          ...state[author],
	          polls: state[author].polls.concat([id])
	        }
	      }
	    case 'ANSWER_POLL':
	    	const user = state[action.authedUser]
	    	return {
	    		...state,
	    		[action.authedUser]: {
	    			...user,
	    			answers: user.answers.concat([action.id])
	    		}
	    	}
		default: return state
	}
}