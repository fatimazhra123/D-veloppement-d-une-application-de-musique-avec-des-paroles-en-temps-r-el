import * as React from 'react';
import MusicApp from './src/components/MusicApp';
import SplashScreen from './src/components/screens/SplashScreen';
import {View ,StyleSheet} from 'react-native';

const App = () => {

  return (
    <View style={style.container}>
    <MusicApp/>
    <SplashScreen/>
     </View>
    
  );
};

export default App;
const style =StyleSheet.create({
  container:{
    flex:1,
  }
 })