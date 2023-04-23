import React from 'react';
import {View, SafeAreaView, StyleSheet, SectionList, Text} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
  const DATA = [
    {
      title: 'Boxes',
      data: [
        {colorName: 'Black', hexCode: '#111'},
        {colorName: 'Red', hexCode: '#ff0000'},
        {colorName: 'Blue', hexCode: '#0000ff'},
        {colorName: 'Green', hexCode: '#00ff00'},
      ],
    },
    {
      title: 'Hoxes',
      data: [
        {colorName: 'Black', hexCode: '#111'},
        {colorName: 'Red', hexCode: '#ff0000'},
        {colorName: 'Blue', hexCode: '#0000ff'},
        {colorName: 'Green', hexCode: '#00ff00'},
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <SectionList
          ListHeaderComponent={<Text>Header</Text>}
          ListFooterComponent={<Text>Footer</Text>}
          sections={DATA}
          contentContainerStyle={styles.container}
          keyExtractor={item => item.colorName}
          renderItem={({item}) => {
            return (
              <View>
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    gap: 10,
  },
  safeArea: {
    flex: 1,
    padding: 10,
  },
  header__text: {
    paddingTop: 20,
    color: 'black',
    marginBottom: 10,
  },
});

export default ColorPalette;
