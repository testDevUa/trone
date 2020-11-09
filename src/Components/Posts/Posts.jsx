import React from 'react';
import Post from './Post/Post';
import './Posts.css';

let Posts = (props) => {

    let allPosts = props.postsPage.posts.map(elem => <Post text={elem.text} />);

    return (
        <div className='posts'>
            {allPosts}
            <textarea onChange={props.inpChange} className='posts__input' value={props.postsPage.postText} placeholder='Что вы хотите рассказать?' />
            <button onClick={props.addPost} className='posts__add'>Add Post</button>
        </div>
    )
}

export default Posts;