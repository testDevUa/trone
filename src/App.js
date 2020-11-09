import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import PostsContainer from './Components/Posts/PostsContainer';

function App(props) {

  // debugger;

  return (
    <div className="App">
      <Header />
      <Route path='/Posts' render={() => <PostsContainer store={props.store} dispatch={props.dispatch} />} />
      <Route path='/Messages' render={() => <Messages />} />
    </div>
  );
}

export default App;
