import React, {useState, useEffect, useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';
import * as API from './functions/API.js';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position =>
        getWether(position.coords.latitude, position.coords.longitude),
      err => console.log(err.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000},
    );
  }, []);

  const getWether = async (lat, lon) => {
    const query_params = new URLSearchParams({
      appid: 'API_KEY',
      lat: lat, //緯度
      lon: lon, //経度
      units: 'metric', //温度の単位を摂氏に
    });
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?' + query_params,
    );
    const weatherData = await response.json();
    setData(weatherData);
    // console.log(JSON.stringify(weatherData) + 'aaaa');
  };


  console.log(data.current);

  return (
    <View style={styles.root}>
      <DateTime
        lat={data.lat}
        lon={data.lon}
        timezone={data.timezone}
        current={data.current}
      />
      <WeatherScroll weatherData={data} timezone={data.timezone} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: data.lat,
          longitude: data.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: data.lat, longitude: data.lon}} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    paddingTop: 30,
    backgroundColor: 'white',
  },
  map: {
    position: 'absolute',
    top: -15,
    zIndex: -10,
    height: '110%',
    width: '100%',
  },
});

export default App;
