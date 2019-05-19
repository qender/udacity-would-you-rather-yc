import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/home';
import Leaderboard from '../../pages/Leaderboard/leaderboard';
import LoginContainer from '../../pages/Login/login-container';
import Poll from '../../pages/Poll/poll';
import NewQuestion from '../../pages/NewQuestion/new-question';
import NotFound from '../../pages/NotFound/not-found';
import NavBar from '../../layouts/NavBar/nav-bar';
import { connect } from 'react-redux'
import { userThunks } from "../../../redux/slices/users";


class App extends Component {
    componentDidMount() {
        this.props.dispatch(userThunks.handleGetUsers());
    }

    render() {
        return (
            <BrowserRouter>
                {/*<Fragment>*/}
                    {/*<NavBar />*/}
                    {/*<Switch>*/}
                        {/*<Route path='/' exact component={Home} />*/}
                        {/*<Route path='/leaderboard' component={Leaderboard} />*/}
                        {/*<Route path='/questions' component={Poll} />*/}
                        {/*<Route path='/add' component={NewQuestion} />*/}
                        {/*<Route component={NotFound} />*/}
                    {/*</Switch>*/}
                {/*</Fragment>*/}
                <Route path='/login' component={LoginContainer} />
            </BrowserRouter>
        );
    }
}

export default connect()(App);
