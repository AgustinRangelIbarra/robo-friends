import React from 'react'
import 'tachyons'

const Card = ( {id, name, email} ) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-4">
			{/* <h1>Robofriends</h1> */}
			<img src={`https://robohash.org/${id+5}?200x200`} alt="RoboImage"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;