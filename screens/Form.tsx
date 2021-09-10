import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Button, Image } from "react-native";
import { useProfile } from "../contexts/ProfileContext";

export default function FormScreen() {
    const {profile, updateProfile} = useProfile();
    const [profileName, setProfileName] = useState(profile.name);

    const handleChangeName = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setProfileName(e.nativeEvent.text);
    }
    const onTakePicture = () => {}

    const onSave = () => {
        updateProfile({
            name: profileName
            // image
        })
    }
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.label}>Enter your name:</Text>
            <TextInput style={styles.textInput} value={profileName} onChange={handleChangeName}/>
        </View>
        <View>
            <Text style={styles.label}>Take a picture:</Text>
            <Button title="Take picture!" onPress={onTakePicture}/>
            {/* {profile.image && <Image source={}/>} */}
        </View>
        <Button title="Save" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  label: {
      fontSize: 26,
      color: "blue"
  },
  textInput: {
      width: 150,
      borderWidth: 2,
      padding: 10
  }
});
