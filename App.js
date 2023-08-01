/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {Text, View} from 'react-native';
import Button from './src/components/Button';
import Colors from './assets/Colors';
import TextBox from './src/components/TextBox';
import {getData, postData} from './src/services/ServerServices';
import RootNavigation from './src/navigation/RootNavigation';


function App() {
  return (
      <RootNavigation />
  );
}

export default App;
