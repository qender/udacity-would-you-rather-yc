import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { userThunks } from "../../../redux/slices/users";
import HomeContainer from '../../pages/Home/home-container';
import LeaderboardContainer from '../../pages/Leaderboard/leaderboard-container';
import LoginContainer from '../../pages/Login/login-container';
import Poll from '../../pages/Poll/poll';
import NewQuestion from '../../pages/NewQuestion/new-question';
import NotFound from '../../pages/NotFound/not-found';
import NavBar from '../../layouts/NavBar/nav-bar';
import PrivateRouteContainer from "../../components/PrivateRoute/private-route-container";


class App extends Component {
    componentDidMount() {
        this.props.dispatch(userThunks.handleGetUsers());
    }

    render() {
        const { authedUser } = this.props;

        return (
            <BrowserRouter>
                <Fragment>
                    {authedUser && <NavBar/>}
                    <Switch>
                        <PrivateRouteContainer path='/' exact component={HomeContainer} />
                        <PrivateRouteContainer path='/leaderboard' component={LeaderboardContainer} />
                        <PrivateRouteContainer path='/questions/:question_id' component={Poll} />
                        <PrivateRouteContainer path='/add' component={NewQuestion} />
                        <Route path='/login' exact component={LoginContainer} />
                        <Route component={NotFound}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
};

export default connect(mapStateToProps)(App);
