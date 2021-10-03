import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import moment from 'moment-timezone';
import {tSAnyKeyword} from '@babel/types';

const sky = {
  Clear: '快晴',
  Clouds: '曇り',
  Atmosphere: '霧',
  Snow: '雪',
  Rain: '雨',
  Drizzle: '小雨',
  Thunderstorm: '雷',
};

const DetailForecast = ({data}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      {data && data.length > 0 ? (
        data.map((data, i) => <DetailForecastItem item={data} key={i} />)
      ) : (
        <View />
      )}
    </View>
  );
};

const DetailForecastItem = ({item}) => {
  // console.log(item);
  if (item && item.weather) {
    const img = {
      uri:
        'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@4x.png',
    };

    const cdt = item.weather[0].main;

    console.log(cdt);

    return (
      <View style={styles.FutureForecastItemContainer}>
        <View style={styles.ForeCastData}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1.5}}>
            <Text style={styles.day}>
              {item ? moment(item.dt * 1000).format('kk:mm') : ''}
            </Text>
            <Image source={img} style={styles.image} />
          </View>
          <View style={{flex: 1, color: 'white'}}>
            <Text style={styles.temp}>{sky[cdt]}</Text>
          </View>
          <View style={{flex: 1.5}}>
            <Text style={styles.temp}>
              気温 : {item ? item.temp : ''}&#176;C
            </Text>
            {/* <Text style={styles.temp}>夜間 : {item ? item.temp.night : ''}&#176;C</Text> */}
          </View>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
};

export default DetailForecast;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  FutureForecastItemContainer: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: '#00000033',
    borderColor: '#eee',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
  ForeCastData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 15,
    color: 'white',
    // backgroundColor: '#3c3c44',
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    // marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '100',
    textAlign: 'left',
  },
});
