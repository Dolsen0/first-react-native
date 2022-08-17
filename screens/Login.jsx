import React from "react";
import { View, Text } from "react-native";
import { loginStyles } from "../assets/styles";
import { Input } from "react-native-elements/dist/input/Input";


function Login(){
    return(
    <View style={loginStyles.headerBar}>
        <Text style={loginStyles.headerText}>IG Clone</Text>
        <Input>Login</Input>
    </View>    
    )
}


export default Login