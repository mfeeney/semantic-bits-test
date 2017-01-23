import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return ( 
      <div className="jumbotron"> 
        <h1>Semantic Bits Test</h1>
        <Link to="adverse-effects" className="btn btn-primary btn-lg">Go to Adverse Effects Page!</Link>
      </div> 
    );
  }
}

export default HomePage;
