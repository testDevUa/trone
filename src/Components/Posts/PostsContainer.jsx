import React from 'react';
import Posts from './Posts';
import './Posts.css';
import { addPostCreator, updateInputText } from './../../redux/postsReducer';
import { connect } from 'react-redux';

let mapStateToPros = (state) => (
    {
        postsPage: state.postsReducer
    }
)

let mapDispatchToProps = (dispatch) => (
    {
        inpChange: (e) => {
            dispatch(updateInputText(e.target.value));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
)

const PostsContainer = connect(mapStateToPros, mapDispatchToProps)(Posts)

export default PostsContainer;