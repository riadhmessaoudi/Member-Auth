import React, { useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Store from './redux/store/index';

import IndexStack from "./routes/IndexStack";

const getFonts = () => Font.loadAsync({
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  ...Ionicons.font,
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Provider store={Store}>
        <IndexStack />
      </Provider>

    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() =>{  
          setTimeout(async () => {
              setFontsLoaded(true)
          }, 2000)
         
         }}
      />
    )
  }

}

