import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home/Home';
import SideBar from './DashBoard/SideBar/SideBar';
import AddBlogs from './DashBoard/AddBlogs/AddBlogs';
// import BlogDetails from './components/BlogDetails/BlogDetails';
import ManageBlogs from './DashBoard/ManageBlogs/ManageBlogs';
import BlogDetails from './BlogDetails/BlogDetails';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <SideBar></SideBar>
        </Route>
        <Route path="/addBlogs">
          <AddBlogs></AddBlogs>
        </Route>
        <Route path="/blogs/:_id">
          <BlogDetails></BlogDetails>
        </Route>
        <Route path="/manageBlogs">
          <ManageBlogs></ManageBlogs>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
