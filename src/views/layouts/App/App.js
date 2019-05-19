import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/home';
import Leaderboard from '../../pages/Leaderboard/leaderboard';
import Login from '../../pages/Login/login';
import Poll from '../../pages/Poll/poll';
import NewQuestion from '../../pages/NewQuestion/new-question';
import NotFound from '../../pages/NotFound/not-found';
import NavBar from '../../layouts/NavBar/nav-bar';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/leaderboard' component={Leaderboard} />
                        <Route path='/questions' component={Poll} />
                        <Route path='/add' component={NewQuestion} />
                        <Route path='/login' component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
