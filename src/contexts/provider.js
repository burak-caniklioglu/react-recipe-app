import React,{useContext, useState} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AppContext.Provider
        value={
            {
                loading,
                setLoading,
                isAuth,
                setIsAuth
            }
        }
        >

            {children}
        </AppContext.Provider>
    )
}

function useApp() {
    return useContext(AppContext);
}

export {AppProvider,useApp, AppContext}