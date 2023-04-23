import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.pageControl}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Gallery');
        }}>
        <Text>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageControl: {backgroundColor: '#fff', flex: 1, padding: 10},
});

export default Home;
