import React from 'react';
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Loading from './Loading'
import Home from './Home'
import LoadingBar from 'react-redux-loading-bar'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
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
				<Leaderboard />
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


