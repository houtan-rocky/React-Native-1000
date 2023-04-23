import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.pageControl}>
      <Text>Pages:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Gallery');
        }}>
        <View>
          <Text>Palettes Gallery</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageControl: {backgroundColor: '#fff', flex: 1, padding: 10},
  button: {
    backgroundColor: '#F6F7BD',
    width: 150,
    padding: 5,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
});

export default Home;
