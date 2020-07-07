import React,{Component} from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';

const Dashboard = ()=> <h2>Dashboard</h2>
const SurveyNew = ()=> <h2>Survey New</h2>

class App extends Component{
   componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div>
               <BrowserRouter>
                    <diV>
                        <Header/>
                        <Route exact={true} path="/" component={Landing}/>
                        <Route exact={true} path="/surveys" component={Dashboard}/>
                        <Route exact={true} path="/surveys/new" component={SurveyNew}/>
                    </diV>
               </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);