import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useProfile } from "../contexts/ProfileContext";

export default function ProfileScreen() {
  const {profile} = useProfile();
  return (
    <View style={styles.container}>
      {profile.image && <Image style={styles.avatar} source={profile.image} />}
      <Text style={styles.name}>{profile.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
     marginBottom: 10
  },
  name: {
    fontSize: 38,

  }
});
