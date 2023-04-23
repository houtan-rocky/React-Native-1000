import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const initialData = [
  {
    id: 1,
    paletteName: 'Not So Amateur',
    colors: [
      {colorName: 'Black', hexCode: '#111'},
      {colorName: 'Red', hexCode: '#ff0000'},
      {colorName: 'Blue', hexCode: '#0000ff'},
      {colorName: 'Green', hexCode: '#00ff00'},
    ],
  },
  {
    id: 2,
    paletteName: 'Foxy',
    colors: [
      {colorName: 'Green', hexCode: '#00ff00'},
      {colorName: 'Blue', hexCode: '#0000ff'},
      {colorName: 'Black', hexCode: '#111'},
      {colorName: 'Red', hexCode: '#ff0000'},
    ],
  },
  {
    id: 3,
    paletteName: 'Lilly',
    colors: [
      {colorName: 'Green', hexCode: '#00ff00'},
      {colorName: 'Blue', hexCode: '#0000ff'},
      {colorName: 'Black', hexCode: '#111'},
      {colorName: 'Red', hexCode: '#ff0000'},
    ],
  },
];

const PalettesGallery = (props: any) => {
  const {navigation} = props;
  const [DATA, setDATA] = useState(initialData);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const data = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    ).then(response => {
      if (!response.ok) {
        return;
      }
      return response.json().then(json => {
        if (json) {
          return json;
        }
      });
    });
    if (data) {
      setDATA(() => data);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    await setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, [fetchColorPalettes]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <View style={styles.pageControl}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.paletteName}
        ListHeaderComponent={
          <TouchableOpacity
            style={{
              backgroundColor: '#436657',
              width: 100,
              padding: 5,
              borderRadius: 5,
            }}
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}>
            <Text>Launch Modal</Text>
          </TouchableOpacity>
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}>
            {' '}
          </RefreshControl>
        }
        renderItem={({item}) => (
          <>
            <View>
              <View style={styles.palette}>
                <PalettePreview paletteItem={item} navigation={navigation} />
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageControl: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  palette: {
    position: 'relative',
    height: 'auto',
  },
});

export default PalettesGallery;
