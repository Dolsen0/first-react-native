import React from "react";
import { ScrollView } from "react-native";
import PhotoCard from "./PhotoCard";
import { photoListStyles } from "../../assets/styles";


const bsPhotos = [
    {id: 1, description: "Small puppy"},
    {id: 2, description: "Maine Coone"},
    {id: 3, description: "Dinner"},
    {id: 4, description: "New Car"},
    {id: 5, description: "Latte Art"},
    {id: 6, description: "Concert"},
]

function PhotoList() {
    return(
        <ScrollView style={photoListStyles.photoList}>
        {bsPhotos.map(photo => (
            <PhotoCard key={photo.id} photo = {photo}/>
        ))}
        </ScrollView>
    )
}


export default PhotoList;