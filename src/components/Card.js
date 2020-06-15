import React from 'react';

const Card = (props) => {
	return(
		// const { name, email, id} = props; 
		// <h1>RoboFriends</h1>
		<div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt ='robots' src={`https://robohash.org/set_set4/${props.id}?200x200`} />
		<div>
			<h2>Name: {props.name}</h2>
			<p><strong>Email:</strong> {props.email}</p>
			<p><strong>Phone:</strong> {props.phone}</p>
			<p><strong>Website:</strong> {props.website}</p>
			
		</div>
		</div>
		);
}
export default Card;