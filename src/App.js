import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Landingpage from "./components/Landingpage";

function App() {
	return (
		<Landingpage />
		// <BrowserRouter>
		// 	<Switch>
		// 		<Route component={} path='' />
		// 		<Route component={} path='' />
		// 		<Route component={} path='' />
		// 		<Route component={} path='' />
		// 		<Route component={} path='' />
		// 	</Switch>
		// </BrowserRouter>
	);
}

export default App;
