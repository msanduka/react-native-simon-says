import React, {useEffect} from 'react';

// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import getStore from './store';
//Native base
import {NativeBaseProvider} from 'native-base';
import {CUSTOM_APP_THEME, NAVIGATION_CUSTOM_APP_THEME} from './theme';

//Components
import {StatusBar} from 'react-native';
import App from './App';

//React navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {initLocalization} from './localization';

const Setup = () => {
  initLocalization();
  useEffect(() => {
    enableScreens();
  }, []);

  return (
    <NavigationContainer theme={NAVIGATION_CUSTOM_APP_THEME}>
      <NativeBaseProvider theme={CUSTOM_APP_THEME}>
        <Provider store={getStore().store}>
          <PersistGate loading={null} persistor={getStore().persistor}>
            <SafeAreaProvider>
              <StatusBar backgroundColor={'black'} />
              <App />
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Setup;
