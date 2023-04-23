import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ColorPaletteScreen from './screens/ColorPaletteScreen';
import PalettesGallery from './screens/PalettesGalleryScreen';
import ColorPaletteModal from './screens/ColorPaletteModalScreen';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Gallery" component={PalettesGallery} />
      <MainStack.Screen name="ColorPalette" component={ColorPaletteScreen} />
    </MainStack.Navigator>
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
