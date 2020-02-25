import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/program/';

export default [
  <Route path="/programs/create" component={Create} exact key="create" />,
  <Route path="/programs/edit/:id" component={Update} exact key="update" />,
  <Route path="/programs/show/:id" component={Show} exact key="show" />,
  <Route path="/programs/" component={List} exact strict key="list" />,
  <Route path="/programs/:page" component={List} exact strict key="page" />
];
