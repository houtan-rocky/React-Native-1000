import React from 'react';
import {View, StyleSheet} from 'react-native';
import ColorPalette from '../components/ColorPalette';

const ColorPaletteScreen = (props: any) => {
  const {params} = props.route;

  return (
    <View style={styles.pageControl}>
      <ColorPalette DATA={params.DATA} paletteName={params.paletteName} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    padding: 10,
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
  },
  pageControl: {
    flex: 1,
  },
  header__text: {
    paddingTop: 20,
    color: 'black',
    marginBottom: 10,
  },
});

export default ColorPaletteScreen;
