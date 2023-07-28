import Spinner from '@/components/spinner/Spinner';
import React from 'react';

const loading = () => {
  return (
    <div className='container spinnerContainer'>
      <Spinner />
    </div>
  );
};

export default loading;
