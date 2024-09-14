import React, { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {


    const contextValues = {

    }

    return (
        <LoginContext.Provider value={contextValues}>
            {children}
        </LoginContext.Provider>
    )
};

export { LoginContext, LoginContextProvider }