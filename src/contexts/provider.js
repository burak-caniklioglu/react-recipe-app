import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate();
    const moreClick = (item) => {
        navigate('/details', {state: {item}});
      }
    return (
        <AppContext.Provider
        value={
            {
                loading,
                setLoading,
                isAuth,
                setIsAuth,
                moreClick
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