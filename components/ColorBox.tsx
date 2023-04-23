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
      <Text style={[styles.box, boxColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    color: '#fff',
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default ColorBox;
