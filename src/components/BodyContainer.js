import React, {Component} from 'react';
import PostContainer from './PostContainer';
import {content} from './Content.js';


class BodyContainer extends Component{
	render(){
		return(
			<div className="bodyContainer">
				<PostContainer title="post1"/>
				<PostContainer title="post2"/>
				<PostContainer title="post99"/>

			</div>
			)
	}
}



export default BodyContainer;