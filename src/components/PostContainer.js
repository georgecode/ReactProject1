import React, {Component} from 'react';
// import PostContainer from './PostContainer';
import {content} from './Content.js';


class PostContainer extends Component{	
	render(){
		
		return(
			<div className="postContainer">
				<h1>{this.props.title}</h1>
				<img src={this.props.img}/>
				<p>{this.props.content}</p>
			</div>
			)
	}
}



export default PostContainer;