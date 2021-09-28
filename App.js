import React from 'react';
import {ActionConst} from 'react-native-router-flux';
import {Router, Stack, Scene} from 'react-native-router-flux';
import MainScreen from './src/screens/MainScreen/';
import MapScreen from './src/screens/MapScreen/';
import ProductListScreen from './src/screens/ProductListScreen/';
import ProductScreen from './src/screens/ProductScreen/';
import Splash from './src/screens/Splash/';
import Tabbar from './src/screens/Tabbar/';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          initial
          key="splash"
          component={Splash}
          hideNavBar
          title="Splash"
          type={ActionConst.REPLACE}
        />
        <Scene
          key="tabbar"
          type={ActionConst.REPLACE}
          component={Tabbar}
          hideNavBar
          title="tabbar"
        />
        <Scene
          key="mainscreen"
          type={ActionConst.REPLACE}
          component={MainScreen}
          hideNavBar
          title="MainScreen"
        />
        <Scene
          key="productlistscreen"
          component={ProductListScreen}
          hideNavBar
          title="productlistscreen"
        />
        <Scene
          key="productscreen"
          component={ProductScreen}
          hideNavBar
          title="productscreen"
        />
        <Scene
          key="mapscreen"
          component={MapScreen}
          hideNavBar
          title="MapScreen"
        />
      </Stack>
    </Router>
  );
};

export default App;
