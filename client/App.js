import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeProvider";
import {PageWrapper} from './components/common/PageWrapper';
import {ThemeSwitch} from './components/common/ThemeSwitch';
import Home from './components/Home';
import AddNew from './components/AddNew';
import BookDetails from './components/BookDetails';
import {Provider} from "react-redux";
import store from "./store";

class App extends React.Component {
	render() {
		return (
		<ThemeProvider>
			<PageWrapper>
				<Provider store={store}>
					<header>
						<ThemeSwitch/>
						<h1>Book Library System</h1>
						<div className="navigation-links">
							<Link to="/">Home</Link>
							<Link to="/addNew">Add</Link>
						</div>
					</header>
					<div className="route-wrapper">
						<Switch>
							<Route path="/addNew" exact component={AddNew} />
							<Route path="/details/:id" exact component={BookDetails} />
							<Route path="/" exact component={Home} />
						</Switch>
					</div>
				</Provider>
			</PageWrapper>
		</ThemeProvider>
		);
	}
}

export default App;