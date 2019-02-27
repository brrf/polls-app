import React from 'react'
import {connect} from 'react-redux'


function AddPoll (props) {	
	return (
		<ul>
			{users.map( user => (
				<li className='user'
					key={user.id}>
					<img className='avatar' src={user.avatarURL} alt='avatar'/>
					<div>
						<h1>{user.name}</h1>
						<p>{user.polls} polls </p>
						<p>{user.answers} answers </p>
					</div>
				</li>
			))}
		</ul>
	)
}



// function mapStateToProps (state) {

	


// export default connect(mapStateToProps)(AddOikk)