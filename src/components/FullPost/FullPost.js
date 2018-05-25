import React, { Component } from 'react';
import './FullPost.css';
import Axios from "axios";

class FullPost extends Component 
{
  //sending a DELETE request to server
  deletePostHandler = () => {
    Axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.selectedPost[0].id)
      .then(response => {
        console.log(response);
      });
  }
  
  render() {
    let post = <p className="paraCenter">Please select a Post from above!</p>;
    
    //when selectedPost is actually something
    if(this.props.selectedPost !== null) {
      post = (
        <div className="FullPost">
          <h1>{this.props.selectedPost[0].title}</h1>
          <p>{this.props.selectedPost[0].body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }

    //will be the p tag or div 
    return post;
  }
}

export default FullPost;