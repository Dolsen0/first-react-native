import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Hero(){
    return(
    <View style={styles.headerBar}>
        <Text>IG Clone</Text>
    </View>    
    )
}


const styles = StyleSheet.create({
    headerBar: {
        height: 80,
        backgroundColor: "white",
    },
    headerText: {}
})

export default Hero