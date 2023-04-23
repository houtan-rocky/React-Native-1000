import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import ColorBox from './ColorBox';

const PalettePreview = (props: any) => {
  const {navigation} = props;

  const {paletteItem} = props;

  return (
    <View style={styles.control}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            DATA: paletteItem.colors,
            paletteName: paletteItem.paletteName,
          });
        }}>
        <Text style={{}}>{paletteItem.paletteName}</Text>
      </TouchableOpacity>
      <FlatList
        data={paletteItem.colors.slice(0, 4)}
        style={styles.colorPaletteList}
        contentContainerStyle={styles.container}
        keyExtractor={(item: any) => item.colorName}
        renderItem={({item}: {item: any}) => {
          return (
            <View>
              <ColorBox colorName={''} hexCode={item.hexCode} />
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
  control: {
    minHeight: 80,
    maxHeight: 100,
    display: 'flex',
    gap: 6,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
  },
  header__text: {
    paddingTop: 20,
    color: 'black',
    marginBottom: 10,
  },
  colorPaletteList: {
    marginBottom: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
  },
});

export default PalettePreview;
