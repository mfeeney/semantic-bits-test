import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as adverseEffectsActions from '../../actions/adverseEffectsActions';
import AdverseEffectsList from './AdverseEffectsList';

class AdverseEffectsPage extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){       
        const {adverseEffects} = this.props;         
        return (
            <div>
                <h1>Adverse Effects</h1>    
                <AdverseEffectsList adverseEffects={adverseEffects} />
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


