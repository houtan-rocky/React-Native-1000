import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.pageControl}>
      <Text>Pages:</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#e4e4e4',
          width: 80,
          padding: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Gallery');
        }}>
        <View>
          <Text>Gallery</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageControl: {backgroundColor: '#fff', flex: 1, padding: 10},
});

export default Home;
