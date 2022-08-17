import React from "react";
import { View, Image, Text } from "react-native";
import { photoCardStyles } from "../../assets/styles";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Icon } from "react-native-elements/dist/icons/Icon";

function PhotoCard({ photo }) {
  const BASE_URL = "https://source.unsplash.com/random?puppy=";

  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
            <Avatar rounded size = "small" source={{uri: "https://randomuser.me/api/portraits/men/1.jpg"}}/>

          <View style={photoCardStyles.cardHeaderText}>
            <Text>Header Text</Text>
            <Text style={photoCardStyles}>Location</Text>
          </View>
        
        </View>
         <Icon name = 'code'/>
      </View>
      <Image source={{ uri: BASE_URL + 1 }} style={photoCardStyles.cardImage} />
      <Text style={photoCardStyles.cardLocation}>Text</Text>

     
    </>
  );
}

export default PhotoCard;
