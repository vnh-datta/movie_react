import React from 'react';

const FullPageContainer = ({ children }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: '.5rem',
        height: '98%',
        width: '100%',
        borderRadius: '25px',
        overflow: 'hidden',
        display: 'flex',
        background: '#fff',
      }}
    >
      {children}
    </div>
  );
};

export default FullPageContainer;
