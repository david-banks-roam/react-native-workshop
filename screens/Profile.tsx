import * as React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native'
import { Text, View } from '../components/Themed';
import { useProfile } from '../contexts/ProfileContext';

export default function TabTwoScreen() {
    const { profile } = useProfile();

    return (
        <View style={styles.container}>
            <Text>Hi, {profile.name || 'anonymous'}</Text>
            {!!profile.picture && (
                <Image
                  resizeMode="contain"
                  style={{
                      marginTop: 40,
                      width: Dimensions.get('window').width,
                      height: Dimensions.get('window').width * profile.picture.height / profile.picture.width
                  }}
                  source={profile.picture}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
