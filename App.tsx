import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadorScreen} from './src/screen/CalculadorScreen';
import {styles} from './src/themes/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
      <CalculadorScreen></CalculadorScreen>
    </SafeAreaView>
  );
};

export default App;
