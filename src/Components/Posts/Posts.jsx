import React from 'react';
import Post from './Post/Post';
import './Posts.css';
import {addPostCreator, updateInputText} from './../../redux/postsReducer';

let Posts = (props) => {

    debugger;

    let allPosts = props.posts.posts.map(elem => <Post text={elem.text}/>);

    let inpChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateInputText(text));
    }

    let addPost = () => {
        props.dispatch(addPostCreator());
        props.posts.postText = '';
    }

    return(

        <div className='posts'>
            {allPosts}
            <textarea onChange = {inpChange} className='posts__input' value={props.posts.postText} placeholder='Что вы хотите рассказать?'/>
            <button onClick = {addPost} className='posts__add'>Add Post</button>
        </div>
    )
}

export default Posts;