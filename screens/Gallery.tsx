import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HorizontalColorPalette from '../components/HorizontalColorPalette';

const DATA = [
  {
    title: 'Not So Amateur',
    data: [
      {colorName: 'Black', hexCode: '#111'},
      {colorName: 'Red', hexCode: '#ff0000'},
      {colorName: 'Blue', hexCode: '#0000ff'},
      {colorName: 'Green', hexCode: '#00ff00'},
    ],
  },
  {
    title: 'Foxy',
    data: [
      {colorName: 'Green', hexCode: '#00ff00'},
      {colorName: 'Blue', hexCode: '#0000ff'},
      {colorName: 'Black', hexCode: '#111'},
      {colorName: 'Red', hexCode: '#ff0000'},
    ],
  },
];

const Gallery = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.pageControl}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            DATA: [DATA[0]],
            paletteName: 'Not So Amateur',
          });
        }}>
        <Text> Not So Amateur</Text>
      </TouchableOpacity>

      <View style={styles.palette}>
        <HorizontalColorPalette DATA={[DATA[0]]} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            DATA: [DATA[1]],
            paletteName: 'Foxy',
          });
        }}>
        <Text> Foxy</Text>
      </TouchableOpacity>

      <View style={styles.palette}>
        <HorizontalColorPalette DATA={[DATA[1]]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageControl: {
    backgroundColor: '#fff',
    flex: 1,
  },
  palette: {
    position: 'relative',
    height: 'auto',
  },
});

export default Gallery;
