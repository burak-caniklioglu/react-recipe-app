import React,{useContext} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider>

            {children}
        </AppContext.Provider>
    )
}

function useApp() {
    return useContext(AppContext);
}

export {AppProvider,useApp, AppContext}