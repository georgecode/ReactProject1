import React, {Component} from 'react';
import PostContainer from './PostContainer';
import {content} from './Content.js';


// https://jsonplaceholder.typicode.com/posts/1

var x = fetch('https://jsonplaceholder.typicode.com/posts/').then(function(response) {
	return response.json();
}).then(function(returnedValue) {
	console.log(returnedValue[0])
	console.log(returnedValue[3])
	// return returnedValue.title
}).catch(function(err) {
	// Error :(
});



//NOT SURE IF HERE OR IN THE RENDER IS BEST PRATICE
const stuff = content.map(function(index){
	return(
			<PostContainer title={index.title} img={index.img} content={index.content}/>
		)
})



class BodyContainer extends Component{
	render(){
		
		//NOT SURE IF HERE OR AT THE TOP IS BEST PRATICE
		// const stuff = content.map(function(index){
		// 	return(
		// 			<PostContainer title={index.title} img={index.img} content={index.content}/>
		// 		)
		// })

		return(
			<div className="bodyContainer">
			<h1>XXXX</h1>
				{stuff}
				{stuff}
				{stuff}
			</div>
			)
	}
}



export default BodyContainer;