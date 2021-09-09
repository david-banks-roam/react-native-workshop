import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Button } from "react-native";
import { useProfile } from "../contexts/ProfileContext";

export default function FormScreen() {
  const {profile, updateProfile} = useProfile();
  const [profileName, setProfileName] = useState(profile.name);

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setProfileName(event.nativeEvent.text);
  }

  const onTakePicture = () => {
    // DAVID
  }

  const onSave = () => {
    updateProfile({name: profileName});
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput style={styles.textInput} value={profileName} onChange={handleChange}/>
      </View>
      <View>
        <Text style={styles.label}>Take a picture of yourself:</Text>
        <Button title="Take picture" onPress={onTakePicture}/>
      </View>
      <Button title="Save" onPress={onSave}/>
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
    fontSize: 24
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 6
  }
});
