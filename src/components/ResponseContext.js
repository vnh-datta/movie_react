import React from 'react';

const ResponseContext = React.createContext({responseData: null,
    setResponseData: () => {}
  });

export default ResponseContext;
