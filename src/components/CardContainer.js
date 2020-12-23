import React from 'react'
// import Card from './Card'
import CardList from '../services/CardList'
import { robots } from '../services/robots'


const CardContainer = () => {
	return (
		<div>
			<CardList robots={robots}/>
		</div>
	);
}

export default CardContainer;