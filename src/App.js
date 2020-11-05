import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import Messages from './Components/Messages/Messages';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path='/Posts' render={() => <Posts posts={props.state.postsPage} dispatch={props.dispatch} />} />
      <Route path='/Messages' render={() => <Messages />} />
    </div>
  );
}

export default App;
