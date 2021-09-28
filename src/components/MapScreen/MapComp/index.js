import React, { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import styles from "./styles"
const MapComp = () => {
    const initialMapState = {
        region: {
            latitude: 52.5200,
            longitude: 13.4050,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
        },
    };
    const [state, setState] = useState(initialMapState);
    const onRegionChange = point => {
        console.warn(point)
        setState(point);
    };
    const _onMapReady = () => {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
        })
            .then((data) => {
                // The user has accepted to enable the location services
                // data can be :
                //  - "already-enabled" if the location services has been already enabled
                //  - "enabled" if user has clicked on OK button in the popup
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            })
            .catch((err) => {
                // The user has not accepted to enable the location services or something went wrong during the process
                // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
                // codes :
                //  - ERR00 : The user has clicked on Cancel button in the popup
                //  - ERR01 : If the Settings change are unavailable
                //  - ERR02 : If the popup has failed to open
                //  - ERR03 : Internal error
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            });
    }
    return (
        <MapView
            initialRegion={state.region}
            style={styles.container}
            onRegionChangeComplete={(point) => onRegionChange(point)}
            showsUserLocation
            showsMyLocationButton
            onMapReady={() => _onMapReady()} />
    )
}

export default MapComp
