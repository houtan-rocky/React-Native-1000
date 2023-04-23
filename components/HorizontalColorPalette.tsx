import React from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import ColorBox from './ColorBox';

const HorizontalColorPalette = (props: any) => {
  const {DATA} = props;

  return (
    <View style={styles.control}>
      <SectionList
        sections={DATA}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => {
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
    height: 80,
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
});

export default HorizontalColorPalette;
