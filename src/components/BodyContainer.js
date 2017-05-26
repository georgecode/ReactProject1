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

	constructor(props,context){
		super(props, context);

		this.state = {
			shit:'THIS is inital state'
		};

		this.fetchFunction = this.fetchFunction.bind(this);	
		// this.componentDidMount = this.componentDidMount.bind(this);
		this.updateState = this.updateState.bind(this);

	}//END constructor


	updateState(response) {
		// debugger
		this.setState({shit: response.title})
	}

	fetchFunction(){

		console.log("fetchFunction")
		// let thing = this
		// console.log("please workkkkkk")
		fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(function(response) {
			return response.json();
		}).then(
			//by default then will use the last returned data as an argument
			//in this example it's the result of response.json()


			this.updateState
		).catch(function(error) {
			debugger
			// shit went wrong
		})

	}//END fetchFunction



	componentDidMount() {
		console.log("componentDidMount")
		this.fetchFunction()
    }//End componentDidMount


	render(){
		
		//NOT SURE IF HERE OR AT THE TOP IS BEST PRATICE
		// const stuff = content.map(function(index){
		// 	return(
		// 			<PostContainer title={index.title} img={index.img} content={index.content}/>
		// 		)
		// })

		return(
			<div className="bodyContainer">

			<h1>{this.state.shit}</h1>
				{stuff}
				{stuff}
				{stuff}
			</div>
			)
	}
}



export default BodyContainer;