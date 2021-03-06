import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';

import moment from 'moment-timezone';
import DetailForecast from './DetailForecast';

const sky = {
  Clear: '快晴',
  Clouds: '曇り',
  Atmosphere: '霧',
  Snow: '雪',
  Rain: '雨',
  Drizzle: '小雨',
  Thunderstorm: '雷',
};

const FutureForecast = ({data, timezone}) => {
  return (
    <View style={{flexDirection: 'column', marginBottom: 50}}>
      <Text style={styles.title}>週間予報</Text>
      {data && data.length > 0 ? (
        data.map((data, i) => {
          if (i != 0) {
            return <FutureForecastItem item={data} key={i} timezone={timezone}/>;
          }
        })
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({item, timezone}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // console.log(item);
  
  if (item && item.weather) {
    const img = {
      uri:
        'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@4x.png',
    };
    return (
      <TouchableOpacity
        style={styles.FutureForecastItemContainer}
        onPress={() => toggleModal()}>
        <Modal isVisible={modalVisible}>
          <View style={styles.modalContainer}>
            <DetailForecast data={item} timezone={timezone} />
            <Button
              onPress={() => toggleModal()}
              title="閉じる"
              style={{color: 'white'}}
            />
          </View>
        </Modal>
        <View style={styles.ForeCastData}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1.5}}>
            <Text style={styles.day}>
              {moment(item.dt * 1000).tz(timezone).format('ddd')}
            </Text>
            <Image source={img} style={styles.image} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.temp}>{sky[item.weather[0].main]}</Text>
          </View>
          <View style={{flex: 1.5}}>
            <Text style={styles.temp}>日中 : {item.temp.day}&#176;C</Text>
            <Text style={styles.temp}>夜間 : {item.temp.night}&#176;C</Text>
          </View>
        </View>
      </TouchableOpacity>
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
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
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
  modalContainer: {
    height: 200,
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
});
