import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard =() =>{
    return(
        <div>
            <div class="center-align">
                <h1>
                Welcome to your Home Page!!
                </h1>
            </div>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">New</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;