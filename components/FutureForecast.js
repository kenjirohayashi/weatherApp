import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import moment from 'moment-timezone';

const FutureForecast = ({data}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      {data && data.length > 0 ? (
        data.map((data, i) => <FutureForecastItem item={data} key={i} />)
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({item}) => {
  // console.log(item);
  if (item && item.weather) {
    const img = {
      uri:
        'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@4x.png',
    };
    return (
      <View style={styles.FutureForecastItemContainer}>
        <View style={styles.ForeCastData}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.day}>
              {item ? moment(item.dt * 1000).format('ddd') : ''}
            </Text>
            <Image source={img} style={styles.image} />
          </View>
          <View>
            <Text style={styles.temp}>日中 : {item ? item.temp.day : ''}&#176;C</Text>
            <Text style={styles.temp}>夜間 : {item ? item.temp.night : ''}&#176;C</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
};

export default FutureForecast;

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
