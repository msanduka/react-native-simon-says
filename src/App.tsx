import React, {useEffect} from 'react';

import {LogBox} from 'react-native';

//SplashScreen
import SplashScreen from 'react-native-splash-screen';

//Navigation Components
import AppNavigation from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    // in case we want to disable some warnings
    LogBox.ignoreLogs([]);
  }, []);

  return <AppNavigation />;
};

export default App;
