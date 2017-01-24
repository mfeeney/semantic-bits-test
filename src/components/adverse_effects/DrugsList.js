import React, {PropTypes} from 'react';

const DrugsList = ({drugs}) => {

    let key = 0;
    const drugsList = drugs.map((drug) => {
        key++;
        return <li key={key}>{drug.medicinalProduct}</li>;
    }); 

    return (
        <div>
            <ul>
                {drugsList}
            </ul>
        </div>
    );    
};

DrugsList.propTypes = {
    drugs: PropTypes.array.isRequired    
};

export default DrugsList;