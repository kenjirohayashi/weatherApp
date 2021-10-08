import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

import FutureForecast from './FutureForecast';
import TodayForecast from './TodayForecast';

const WeatherScroll = ({weatherData, timezone}) => {

  return (
    <Swiper>
      <ScrollView style={styles.scrollView}>
        <TodayForecast data={weatherData ? weatherData.hourly : {}} />
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        <FutureForecast data={weatherData ? weatherData.daily : {}} timezone={timezone}/>
      </ScrollView>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: '#18181bcc',
    padding: 30,
  },
});

export default WeatherScroll;
