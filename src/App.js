import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLayout from './components/layout/HomeLayout';
import AuthLayout from './components/layout/AuthLayout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import VotingList from './components/pages/VotingList';
import { Provider } from 'react-redux';
import { store } from './utils/redux/store.js';
import User from './utils/redux/user_actions';
import VotingRoom from './components/pages/VotingRoom';
import NotFound from './components/pages/NotFound';
import CreatePage from './components/pages/CreatePage';

store.dispatch(User.isLogin());

function App() {
	return (
		<React.Fragment>
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<AuthLayout path="/login" exact component={Login} />
						<HomeLayout path="/" exact component={Home} />
						<HomeLayout path="/voting" exact component={VotingList} />
						<HomeLayout path="/voting/create" exact component={CreatePage} />
						<Route path="/notfound" exact component={NotFound} />
						<HomeLayout path="/voting/:id" isRoom={true} exact component={VotingRoom} />
					</Switch>
				</BrowserRouter>
			</Provider>
		</React.Fragment>
	);
}

export default App;
