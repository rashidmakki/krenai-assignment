import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import {store} from './src/store/store';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './src/modules/cart/index';
import Home from './src/modules/home/home';
import SendBack from './src/modules/cart/components/sendBack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle,{flex:1}]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"  >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Utensils" component={Cart} options={{
             headerTitle:()=> <SendBack/>
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
