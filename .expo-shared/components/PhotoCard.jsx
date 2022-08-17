import React from "react";
import { View, Image, Text} from 'react-native'
import { photoCardStyles } from "../../assets/styles";

function PhotoCard({photo}){
    const BASE_URL = "https://source.unsplash.com/random?cat="

    return(
        <>
        <View style={photoCardStyles.cardContainer}>
            <View style = {photoCardStyles.cardHeader}>

                <View style = {photoCardStyles.cardHeaderText}>
            <Text>Header Text</Text>
            <Text style = {photoCardStyles}>Location</Text>

                </View>
            </View>
            <Image />
        </View>

        <Image source={{uri: BASE_URL + 1}} style={photoCardStyles.cardImage}/>
        <Text style = {photoCardStyles.cardLocation}>Text</Text>
        </>
    )
    
}


export default PhotoCard

