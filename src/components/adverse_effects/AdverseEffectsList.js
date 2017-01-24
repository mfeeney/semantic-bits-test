import React, {PropTypes} from 'react';
import AdverseEffectRow from './AdverseEffectRow';

const AdverseEffectsList = ({adverseEffects}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Safety Report ID</th>
        <th>Company Number</th>
        <th>Receive Date</th>
        <th>Receipt Date</th>
        <th>Patient Age</th>
        <th>Patient Sex</th>
        <th>Drugs</th>
        <th>Reaction</th>
      </tr>
      </thead>
      <tbody>
      {adverseEffects.map(ae => 
        <AdverseEffectRow key={ae._id} adverseEffect={ae} />  
      )}
      </tbody>
    </table>
  );
};

AdverseEffectsList.propTypes = {
  adverseEffects: PropTypes.array.isRequired
};

export default AdverseEffectsList;