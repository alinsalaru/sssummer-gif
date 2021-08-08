import React from 'react';
import GifCollector from './components/GifCollector/GifCollector';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() =>  <div> You are on home page </div> } />
          <Route path="/dog" render={() =>   <GifCollector searchItem="dog"></GifCollector> } />
          <Route path="/cat" render={() =>   <GifCollector searchItem="cat"></GifCollector> } />
          <Route path="/aliens" render={() =>   <GifCollector searchItem="aliens"></GifCollector> } />
          {/* Redirect to a 404 page */}
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}
