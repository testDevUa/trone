import postsReducer from './postsReducer';

let store = {
    _state: {
        postsPage: {
            posts: [
                { text: 'First post' },
                { text: 'Second post' },
                { text: 'Third post' }
            ],
            postText: ''
        }
    },
    getState() { return this._state },
    dispatch(action) {
        postsReducer(this._state, action);
        this._rerenderEntireTree();
    },
    _rerenderEntireTree() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}

// export let addPostCreator = () => ({type: 'ADD-POST'});
// export let updateInputText = (newText) => ({type: 'UPDATE-INPUT-TEXT', text: newText});

window.store = store;

export default store;