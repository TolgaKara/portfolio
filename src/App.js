import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Landingpage from "./pages/Landingpage/Landingpage";
import About from "./components/organism/About";
import SinglePost from "./components/organism/SinglePost";
import Project from "./components/organism/Project";
import Login from "./components/organism/Login";
import Navbar from "./components/molecules/Navbar";
import { Footer } from "./components/molecules/Footer";
import { Fragment } from "react";
import { Blog } from "./pages/Blog/Blog";
import { ContactMe } from "./components/organism/ContactMe";

function App() {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route component={Landingpage} path='/' exact />
				<Route component={About} path='/about' />
				<Route component={SinglePost} path='/blog/post/:slug' />
				<Route component={Blog} path='/blog' />
				<Route component={Project} path='/project' />
				<Route component={ContactMe} path='/contact' />
				<Route component={Login} path='/admin' />
			</Switch>
			<Footer />
		</Fragment>
	);
}

export default App;
