import React from 'react'
// import {connect} from 'react-redux'


export default class AddPoll extends React.Component {	
	state = {
		question: '',
		a: '',
		b: '',
		c: '',
		d: ''
	}

	updateInputState = (e) => {
		const {value, name} = e.target;

		this.setState({
			[name]: value
		})	
	}

	isDisabled () {
		const {question, a, b, c, d} = this.this.state

		return queestion === '' || a === '' || b === '' || c === '' || d === ''
	}

	render() {

		const {question, a, b, c, d} = this.state;

		return (
			<form className='add-form'>
				<h3>What is your question?</h3>
				<input value={question}
					   type='text' 
					   className='input'
					   name='question'
					   id='question' 
					   onChange={this.updateInputState}/>

				<h3>What are the options?</h3>
				<label className='label' htmlFor='a'>A.</label>
				<input	type='text'
						className='input'
						value={a}
						onChange={this.updateInputState}
						id='a' 
						name='a'/>

				<label  className='label' htmlFor='b'>B.</label>
				<input	type='text'
						className='input'
						value={b}
						onChange={this.updateInputState}
						id='b'
						name='b' />

				<label className='label' htmlFor='c'>C.</label>
				<input	type='text'
						className='input'
						value={c}
						onChange={this.updateInputState}
						id='c'
						name='c' />

				<label className='label' htmlFor='d'>D.</label>
				<input	type='text'
						className='input'
						value={d}
						onChange={this.updateInputState}
						id='d'
						name='d' />

				<button className='btn'
						type='submit'
						disabled = 'true'>Submit</button>
			</form>
		)
	}
}