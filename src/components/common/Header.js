import React,  {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  // { loading && <LoadingDots interval={100} dots={20}/>} -- LoadingDots component will only display if loading is true
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>      
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
