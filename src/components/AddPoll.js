import React from 'react'
// import {connect} from 'react-redux'


export default function AddPoll (props) {	
	return (
		<form className='add-form'>
			<h2>What is your question?</h2>
			<input type='text' className='input' />

			<h2>What are the options?</h2>
			<div className='label'>A.</div>
			<input type='text' className='input' />
			<div className='label'>A.</div>
			<input type='text' className='input' />
			<div className='label'>A.</div>
			<input type='text' className='input' />
			<div className='label'>A.</div>
			<input type='text' className='input' />

			<button className='btn'>Submit</button>
		</form>
	)
}