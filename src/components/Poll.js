import React from 'react';
import {connect} from 'react-redux'

class Poll extends React.Component {

	VoteResults (poll, key) {
		const totalVotes = poll.aVotes.length + poll.bVotes.length + poll.cVotes.length + poll.dVotes.length;
		const localTally = poll[`${key}Votes`].length
		const percentageTotal = localTally/totalVotes * 100
		return `${percentageTotal}% (${localTally})`
	}

	render () {
		const {poll, vote, authorAvatar, authedUser} = this.props;

		if (poll === null) {
			return <p>This poll does not exist!</p>
		}

		console.log('moshe:', vote)
		return (
			<div className='poll-container'>
				<h1 className='question'>{poll.question}</h1>
				<div className='poll-author'>
					<p>BY</p>
					<img src={authorAvatar}
						/>
				</div>
				<ul>
					{['aText', 'bText', 'cText', 'dText'].map( (key) => {

						return (
						  <li className={`option ${vote === key[0] ? 'chosen' : ''}`}
							  key={key}>
							{vote === null 
							  ? poll[key]
							  : <div className='result'>
								  	<span>{poll[key]}</span>
								  	<span>
								  		{this.VoteResults(poll, key[0])}
								  	</span>
							  	</div>
							}
						  </li>
						)
					}
				)}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, polls, users}, {match}) {
	const {id} = match.params
	const poll = polls[id]

	if (!poll) {
		return {
			poll: null
		}
	}

	const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce( (vote, key) => {
		if (vote !== null) {
			return vote
		}

		return poll[key].includes(authedUser) 
			? key[0]
			: vote
	}, null)

	return {
		authedUser,
		poll,
		vote,
		authorAvatar: users[poll.author].avatarURL
	}
	
}

export default connect(mapStateToProps)(Poll)