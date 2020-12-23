import React from 'react'
import Card from '../components/Card'

const CardList = ( {robots} ) => {

	if (true) {throw new Error("Noooo!")}

	return(
		<div>
			{
				robots.map((robot, i) => {
					return (
						<Card 
							key={robot.id} 
							id={robot.id+50} 
							name={robot.name} 
							email={robot.email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;