import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { useProfile } from '../contexts/ProfileContext';

export default function TabTwoScreen() {
    const { profile } = useProfile();

    return (
        <View style={styles.container}>
            <Text>{profile.name}</Text>
            {!!profile.picture && <Image source={profile.picture} />}
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
});
