import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import DrugsList from './DrugsList';

const AdverseEffectRow = ({adverseEffect}) => {
    let sex = 'unknown';
    if(adverseEffect.patient.sex == 1)sex = 'Male';
    else if (adverseEffect.patient.sex == 2)sex = 'Female';  

    return (
        <tr>
            <td>{adverseEffect.safetyReportId}</td>
            <td>{adverseEffect.companyNumber}</td>
            <td>{moment(adverseEffect.receiveDate).format('YYYY-MM-DD')}</td>
            <td>{moment(adverseEffect.receiptDate).format('YYYY-MM-DD')}</td>
            <td>{adverseEffect.patient.age}</td>
            <td>{sex}</td>
            <td><DrugsList drugs={adverseEffect.patient.drugs} /></td>
            <td>{adverseEffect.reaction}</td>
        </tr>
    );
};

AdverseEffectRow.propTypes = {
    adverseEffect: PropTypes.object.isRequired
};

export default AdverseEffectRow;
