import React from 'react';
import GifCollector from './components/GifCollector/GifCollector';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WrapperGifCollector from './components/WrapperGifCollector/WrapperGifCollector';

export default function App() {
 
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() =>  <div> You are on home page </div> } />
          <Route path="/:searchItem" render={() =>   <WrapperGifCollector /> } />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}
