import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from "./features/Todo"
import AlbumFeature from "./features/Album"
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <p><Link to="/home">Home</Link></p>
      <p><Link to="/todos">Todo</Link></p>
      <p><Link to="/albums">Album</Link></p>
      <Switch>
        <Redirect from='/home' to="/"/>
        <Route path="/" component={TodoFeature} exact/>
        <Route path="/todos" component={TodoFeature}/>
        <Route path="/albums" component={AlbumFeature}/>


        <Route component={NotFound}/>
      </Switch>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
