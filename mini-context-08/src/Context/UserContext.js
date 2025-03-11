import React from 'react';

const UserContext = React.createContext({
    user: null,
    setUser: () => {},
});

export default UserContext;
// Compare this snippet from mini-context-08/src/Context/UserContext.js:
// import React from 'react';