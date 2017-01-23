import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adverseEffectsActions from '../../actions/adverseEffectsActions';
import {browserHistory} from 'react-router';

class AdverseEffectsPage extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){
        const adverseEffectsList = this.props.adverseEffects.map((ae) =>
            <li key={ae.safetyReportId}>{ae.companyNumber}</li>            
        );        
        return (
            <div>
                <h1>Adverse Effects</h1>    
                <ul>{adverseEffectsList}</ul>
            </div>
        );
    }
}

AdverseEffectsPage.propTypes = {
    adverseEffects: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {adverseEffects: state.adverseEffects};
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(adverseEffectsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdverseEffectsPage);


