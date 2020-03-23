import React from 'react';
import { Link, } from 'react-router-dom';

const NoMatch = () => (
  <h3>Page not found
    <Link to="/">Return to Home</Link>
  </h3>
)

export default NoMatch