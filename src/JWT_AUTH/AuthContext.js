import { createContext,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import keychain from "react-native-keychain"

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider=({children}) => {
    const [authState,setAuthState] = useState({
        accessToken:null,
        refreshToken:null,
        authenticated:null
    })

    const logout = async (value) =>{
        await  keychain.resetGenericPassword()
    
        setAuthState(prevAuth =>({
            ...prevAuth,
            authenticated:false
        }));
    };
    
    const getAccessToken = () => authState.accessToken;

    return(
        <Provider
        value={{
            auth,
            getAccessToken,
            setAuth,
            logout
        }}>
            {children}
        </Provider>
    )
}

export {AuthContext,AuthProvider}




