import React, {Component} from 'react';
import PostContainer from './PostContainer';

class BodyContainer extends Component{
	render(){
		return(
			<div className="bodyContainer">
				<PostContainer />
				<PostContainer />
				<PostContainer />

			</div>
			)
	}
}



export default BodyContainer;