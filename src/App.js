import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import BlogState from './context/blog/blogState';
import BlogPost from './screen/blogpost';
import Home from './screen/home';
import NewBlog from './screen/newblog';

function App() {
  return (
    <BlogState>
          <Router>
              <Switch>
                <Route path='/' exact component={Home} ></Route>
                <Route path='/newblog' exact component={NewBlog} ></Route>
                <Route path='/blogpost/:title/:Description' exact component={BlogPost} ></Route>
              </Switch>   
          </Router>
    </BlogState>
  );
}

export default App;
