import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ColorPaletteScreen from './screens/ColorPaletteScreen';
import Gallery from './screens/Gallery';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="ColorPalette" component={ColorPaletteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

{
  /* <View style={styles.container}>
<ColorBox colorName="Black" hexCode="#111" />
<ColorBox colorName="Red" hexCode="#ff0000" />
<ColorBox colorName="Blue" hexCode="#0000ff" />
<ColorBox colorName="Green" hexCode="#00ff00" />
</View> */
}

export default App;
