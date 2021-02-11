import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route component={Landingpage} path='/' exact />
				<Route component={About} path='/about' />
				<Route component={SinglePost} path='/post/:slug' />
				<Route component={Post} path='/post' />
				<Route component={Project} path='/project' />
				<Route component={Login} path='/admin' />
			</Switch>
		</Fragment>
	);
}

export default App;
