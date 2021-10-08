import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import moment from 'moment-timezone';

const sky = {
  Clear: '快晴',
  Clouds: '曇り',
  Atmosphere: '霧',
  Snow: '雪',
  Rain: '雨',
  Drizzle: '小雨',
  Thunderstorm: '雷',
};

const DetailForecast = ({data, timezone}) => {
  // console.log(data);
  if (data && data.weather) {
    const img = {
      uri:
        'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
        <View style={styles.upperContainer}>
          <View style={{textAlign: 'center'}}>
            <Image source={img} style={styles.image} />
            <Text style={styles.sky}>{sky[data.weather[0].main]}</Text>
          </View>
          <View style={styles.feeelData}>
            <Text style={styles.subtext}>湿度 : {data.humidity}%</Text>
            <Text style={styles.subtext}>気圧 : {data.pressure}hPa</Text>
            <Text style={styles.subtext}>
              日の出 :{' '}
              {moment(data.sunrise * 1000)
                .tz(timezone)
                .format('HH:mm')}
            </Text>
            <Text style={styles.subtext}>
              日の入り :{' '}
              {moment(data.sunset * 1000)
                .tz(timezone)
                .format('HH:mm')}
            </Text>
          </View>
        </View>
        <View style={styles.tempData}>
          <Text style={styles.text}>日中 : {data.temp.day}&#176;C</Text>
          <Text style={styles.text}>夜間 : {data.temp.night}&#176;C</Text>
          <Text style={styles.text}>最高温度 : {data.temp.max}&#176;C</Text>
          <Text style={styles.text}>最低温度 : {data.temp.min}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
};

export default DetailForecast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  upperContainer: {
    width: '100%',
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    // backgroundColor: 'white',
  },
  day: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10,
  },
  sky: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 18,
    textAlign: 'center',
  },
  feeelData: {
    padding: 10,
    marginTop: 10,
  },
  tempData: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  subtext: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color: '#5b5f62',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 16,
  },
});
