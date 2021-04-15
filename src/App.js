import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Landingpage from "./pages/Landingpage/Landingpage";
import About from "./pages/About/About";
import SinglePost from "./components/organism/SinglePost";
import Project from "./components/organism/Project";
import Login from "./components/organism/Login";
import Navbar from "./components/molecules/Navbar";
import { Footer } from "./components/molecules/Footer";
import { Fragment } from "react";
import { Blog } from "./pages/Blog/Blog";
import { ContactMe } from "./components/organism/ContactMe";
import { AnimatePresence } from "framer-motion";
import Resume from "./pages/Resume/Resume";

function App() {
	const location = useLocation();
	return (
		<Fragment>
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route component={Landingpage} path='/' exact />
					<Route component={About} path='/about' />
					<Route component={SinglePost} path='/blog/post/:slug' />
					<Route component={Blog} path='/blog' />
					<Route component={Project} path='/project' />
					<Route component={Resume} path='/resume' />
					<Route component={ContactMe} path='/contact' />
					<Route component={Login} path='/admin' />
				</Switch>
			</AnimatePresence>
			<Footer />
		</Fragment>
	);
}

export default App;
