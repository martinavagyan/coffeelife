import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
// import { TodoApp } from 'app/containers/TodoApp';
import Home from 'app/containers/Home';

// render react DOM
export const App = hot(({ history }) => (
	<Root>
		<Router history={history}>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	</Root>
));
