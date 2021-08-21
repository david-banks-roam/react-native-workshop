import * as React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, Button, Alert } from "react-native";
import { Camera } from "expo-camera";

import { Text, View } from "../components/Themed";
import { useProfile } from "../contexts/ProfileContext";

export default function FormScreen() {
  return (
    <View style={styles.container}>
      <Text>Form</Text>
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
