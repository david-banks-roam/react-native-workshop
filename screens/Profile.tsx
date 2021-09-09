import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useProfile } from "../contexts/ProfileContext";

export default function ProfileScreen() {
  const {profile} = useProfile();
  return (
    <View style={styles.container}>
      <Text>Name : {profile.name}</Text>
      
      {!!profile.image && <View>
          <Text>Picture :</Text>
          <Image source={profile.image}/>
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
