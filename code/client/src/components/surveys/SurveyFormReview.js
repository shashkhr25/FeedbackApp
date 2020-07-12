import React from 'react';
import {connect } from 'react-redux';
import * as actions from '../../actions';
import formFields from './formFields';
import _ from 'lodash';
import {withRouter} from 'react-router-dom';

const SurveyReview = ({onCancel, formValues, submitSurvey, history })=>{
    const reviewFields= _.map(formFields, ({name, label})=>{
        return(
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    })
    return(
        <div>
            <h5>Confirm your entries</h5>
            {reviewFields}
            <button className="green btn-flat right" onClick={()=>submitSurvey(formValues, history)}>Send Survey</button>
                
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
        </div>
    );
};

function mapStateToProps(state){

    return{
        formValues: state.form.surveyForm.values
    };
}
export default connect(mapStateToProps,actions)(withRouter(SurveyReview));