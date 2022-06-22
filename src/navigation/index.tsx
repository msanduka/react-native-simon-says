import React from 'react';

// importing stack param types
import {RootStackParamList} from './types';
import {Localization} from '../localization';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'native-base';
const Stack = createStackNavigator<RootStackParamList>();

import Game from '../components/game';
import Results from '../components/results';

import {GAME_SCREEN_KEY, RESULT_SCREEN_KEY} from './keys';

const AppNavigation = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={GAME_SCREEN_KEY}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.primary['500'],
        },
      }}>
      <Stack.Screen name={GAME_SCREEN_KEY} component={Game} />
      <Stack.Screen
        name={RESULT_SCREEN_KEY}
        component={Results}
        options={{
          headerTitle: Localization('results_title'),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
