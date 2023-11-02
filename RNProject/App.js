import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/homePages/Home';
import Portofolio from './src/portofolioPages/Portofolio';
import DetailPortofolio from './src/portofolioPages/DetailPortofolio';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Portofolio" component={Portofolio} />
      <Stack.Screen name="DetailPortofolio" component={DetailPortofolio} />
    </Stack.Navigator>
  );
}

export default App;
