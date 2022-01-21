import React, { useEffect } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from "./features/Todo"
import AlbumFeature from "./features/Album"
import NotFound from './components/NotFound';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
function App() {
  useEffect(() => {
    const featchProduct = async() => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      // console.log(productList);
    }

    featchProduct();
  }, []);


  return (
    <div className="App">
      <h1>Header</h1>
      <p><Link to="/home">Home</Link></p>
      <p><Link to="/todos">Todo</Link></p>
      <p><Link to="/albums">Album</Link></p>
      <Switch>
        <Redirect from='/home' to="/"/>
        <Route path="/" component={TodoFeature} exact/>
        <Route path="/counter" component={CounterFeature}/>
        <Route path="/todos" component={TodoFeature}/>
        <Route path="/albums" component={AlbumFeature}/>


        <Route component={NotFound}/>
      </Switch>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
