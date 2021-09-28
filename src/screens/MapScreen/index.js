import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapComp from '../../components/MapScreen/MapComp';
import MarkerComp from '../../components/MapScreen/MarkerComp';
import ButtonComp from '../../components/MapScreen/ButtonComp';
import ModalComp from '../../components/MapScreen/ModalComp';

const MapScreen = () => {
  const [showFinishModal, setShowFinishModal] = useState(false);
  const getLocationPoint = () => {
    setShowFinishModal(true);
    setTimeout(() => {
      setShowFinishModal(false)
      Actions.tabbar({ goToFinishTab: Math.floor(Math.random() * (999999999 - 5 + 1)) + 5 })
    }, 2000);
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#333333"
        barStyle="light-content"
      />
      <ModalComp showFinishModal={showFinishModal} />
      <MapComp />
      <MarkerComp />
      <ButtonComp getLocationPoint={() => getLocationPoint()} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
