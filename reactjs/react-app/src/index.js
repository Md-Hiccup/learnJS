
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
import { Button } from 'reactstrap';

import About from './pages/about';
import Contact from './pages/contact';
import Layout from './pages/layout';
import Blog from './pages/blog'
const app = document.getElementById('app');
//ReactDOM.render(<Layout/>, app);

ReactDOM.render(
  <Router>
    <div className="container">
      <Link to="/"><Button color="success">Home</Button></Link>
      <Link to="/about"><Button color="danger">About</Button></Link>
      <Link to="/blog"><Button color="warning">Blog</Button></Link>
      <Link to="/contact"><Button color="primary">Contact</Button></Link>

      <h1>Hiccup Lab</h1>
      <Switch>
        <Route exact path="/" component={ Layout }></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/blog" component={Blog}></Route>
      </Switch>
    </div>
  </Router>,
app);