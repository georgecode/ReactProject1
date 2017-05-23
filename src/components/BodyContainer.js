import React, {Component} from 'react';
import PostContainer from './PostContainer';
import {content} from './Content.js';


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
				{stuff}
				{stuff}
				{stuff}
			</div>
			)
	}
}



export default BodyContainer;