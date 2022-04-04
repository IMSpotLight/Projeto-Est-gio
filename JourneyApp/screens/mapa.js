import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Mapa() {
    return (
        <View style={StyleSheet.container}>
            <Text>Mapa</Text>
            <MapView 
                style={{height: '50%', width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
            />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
