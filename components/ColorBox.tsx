import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IColorBoxProps {
  colorName: string;
  hexCode: string;
}

const ColorBox: FC<IColorBoxProps> = props => {
  const {colorName, hexCode} = props;
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View>
      <View style={[styles.box, boxColor]}>
        {colorName && boxColor ? (
          <Text style={[styles.box, boxColor]}>
            {colorName}: {colorName ? hexCode : ''}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    color: '#fff',
    minWidth: 50,
    minHeight: 50,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorBox;
