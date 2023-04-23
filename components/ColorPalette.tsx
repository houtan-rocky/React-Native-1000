import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ColorBox from './ColorBox';

const ColorPalette = (props: any) => {
  const {DATA, paletteName} = props;

  return (
    <View style={styles.pageControl}>
      <FlatList
        ListHeaderComponent={<Text>{paletteName}</Text>}
        data={DATA}
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
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    padding: 10,
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

export default ColorPalette;
