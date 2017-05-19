import React, {Component} from 'react';
// import PostContainer from './PostContainer';
import {content} from './Content.js';

var shit="shit";


class PostContainer extends Component{

	
	render(){
		
		// console.log(content[0])
		
		return(
			<div className="postContainer">
				<h1>{content[0].title}</h1>
				<h1 className="title">{this.props.title}</h1>
				<img src={content[0].img}/>
				<p>{content[0].content}</p>
			</div>
			)
	}
}



export default PostContainer;