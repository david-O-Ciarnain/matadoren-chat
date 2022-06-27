import { AppRegistry } from "react-native";
import App from "../../App";
import {name as appName} from "../../app.json";
import { AuthProvider } from "./AuthContext";
import { AxiosProvider } from "./AxiosContext";
import React from "react"

const Root = () => {
    return(
        <AuthProvider>
            <AxiosProvider>
                <App />
            </AxiosProvider>
        </AuthProvider>
    );
};
AppRegistry.registerComponent(appName, () => Root)