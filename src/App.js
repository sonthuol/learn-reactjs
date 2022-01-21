import Header from 'components/Header';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from "./features/Album";
import CounterFeature from './features/Counter';
import {Button } from "@material-ui/core";
import TodoFeature from "./features/Todo";
import { useSnackbar } from 'notistack';


function App() {
  const {enqueueSnackbar} = useSnackbar();

  // useEffect(() => {
  //   const featchProduct = async() => {
  //     const params = {
  //       _limit: 10,
  //     }
  //     const productList = await productApi.getAll(params);
  //   }

  //   featchProduct();
  // }, []);

  const showNoti = () => {
    enqueueSnackbar('Register successfully', {variant: 'success'});
  }
   
  return (
    <div className="App">
      <Header/>
      <Button onClick={showNoti}>Show noti</Button>
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
