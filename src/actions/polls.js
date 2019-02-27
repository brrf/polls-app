import {savePoll} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export function receivePolls (polls) {
	return {
		type: 'RECEIVE_POLLS',
		polls
	}
}

function createPoll (poll) {
	return {
		type: 'CREATE_POLL',
		poll
	}
}

export function handleCreatePoll (poll) {
	return (dispatch, getState) => {
		const {authedUser} = getState();

		dispatch(showLoading());
		return savePoll({
			...poll,
			author: authedUser
		})
		.then( (poll) => dispatch(createPoll(poll)))
		.then(dispatch(hideLoading()))
		}
}

// function answerPoll () {

// }