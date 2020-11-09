let initialState = {
    posts: [
        { text: 'First post' },
        { text: 'Second post' },
        { text: 'Third post' }
    ],
    postText: ''
}

let postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            state.posts.push({ text: state.postText });
            state.postText = '';
            return state;

        case 'UPDATE-INPUT-TEXT':
            state.postText = action.text;
            return state;

        default: return state;

    }
}

export default postsReducer;

export let addPostCreator = () => ({ type: 'ADD-POST' });
export let updateInputText = (newText) => ({ type: 'UPDATE-INPUT-TEXT', text: newText });