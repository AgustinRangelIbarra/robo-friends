import React from 'react'

const Searchbox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba-m b--blue bg-lightest-blue w-30 br4-ns"
				type="search" 
				placeholder="Search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default Searchbox;