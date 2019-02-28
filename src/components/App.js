import React from 'react';
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Loading from './Loading'
import Home from './Home'
import LoadingBar from 'react-redux-loading-bar'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'

class App extends React.Component {

	componentDidMount () {
	this.props.dispatch(handleInitialData())
	}

	render() {


		return (
			<div>
				<LoadingBar />
				{this.props.loading === true
					? <Loading/>
					: <Home />
				}
				<Poll match={{params: {id: 'vthrdm985a262al8qx3do'}}} />
			</div>
		)
	}
}

	function mapStateToProps ({authedUser}) {
		return {
			loading: authedUser === null
		}
	}

export default connect(mapStateToProps)(App)


