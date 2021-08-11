import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { Camera } from 'expo-camera';

import { Text, View } from '../components/Themed';
import { useProfile } from '../contexts/ProfileContext';

export default function TabOneScreen() {
    const { profile, updateProfile } = useProfile();
    const [textInputVal, setTextInputVal] = useState(profile.name);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const cameraRef = useRef<Camera | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const onTakePicture = async () => {
        if (cameraRef.current) {
            const picture = await cameraRef.current!.takePictureAsync();
            updateProfile({
                picture,
            });
        }
    };

    const onSave = () => {
        updateProfile({
            name: textInputVal,
        });
    };

    if (hasPermission === null) {
        return <View />
    }
    if (!hasPermission) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>Name : </Text>
            <TextInput
                style={styles.textInput}
                value={textInputVal}
                onChange={(e) => setTextInputVal(e.nativeEvent.text)}
            />
            <Text>Take a picture of yourself :</Text>
            <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                ref={cameraRef}
            >
                <Button title="Take picture" onPress={onTakePicture} />
            </Camera>
            <Button title="SAVE" onPress={onSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textInput: {
        width: 150,
        borderWidth: 1,
    },
    camera: {
        width: '100%',
        height: 500,
    },
});
