let postsReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-POST':
            state.postsPage.posts.push({ text: state.postsPage.postText })
            return state;

        case 'UPDATE-INPUT-TEXT':
            state.postsPage.postText = action.text;
            return state;

        default: return state;

    }
}

export default postsReducer;

export let addPostCreator = () => ({ type: 'ADD-POST' });
export let updateInputText = (newText) => ({ type: 'UPDATE-INPUT-TEXT', text: newText });