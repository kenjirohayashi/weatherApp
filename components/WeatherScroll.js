import React from 'react';
import moment from 'moment-timezone';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';

import FutureForecast from './FutureForecast';

const WeatherScroll = ({weatherData}) => {
  // console.log(JSON.stringify(weatherData));
  return (
    <ScrollView style={styles.scrollView}>
      {/* <CurrentTemp data={weatherData ? weatherData[0] : {}} /> */}
      <FutureForecast data={weatherData ? weatherData : {}} />
    </ScrollView>
  );
};

// const CurrentTemp = ({data}) => {
//   if(data && data.weather){
//     const img = {uri: 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png'};
//     return (
//       <View style={styles.currentTempContainer}>
//         <Text style={styles.day}>
//           {data ? moment(data.dt * 1000).format('ddd') : ''}
//         </Text>
//         <View style={styles.currentDataContainer}>
//           <Image source={img} style={styles.image} />
//           <View>
//             <Text style={styles.temp}>日中 - {data ? data.temp.day : ""}&#176;C</Text>
//             <Text style={styles.temp}>夜間 - {data ? data.temp.night : ""}&#176;C</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }else{
//     // console.log('Nooooo');
//     return(
//       <View>
//       </View>
//     )
//   }
// };

const newLocal = 'center';
const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: '#18181bcc',
    padding: 30,
  },
  //   image: {
  //     width: 70,
  //     height: 70,
  //   },
  //   currentTempContainer: {
  //     flex: 0.5,
  //     justifyContent: 'center',
  //     backgroundColor: '#00000033',
  //     borderColor: '#eee',
  //     borderRadius: 10,
  //     borderWidth: 1,
  //     padding: 20,
  //     margin: 10,
  //   },
  //   currentDataContainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //   },
  //   day: {
  //     fontSize: 18,
  //     borderRadius: 50,
  //     color: 'white',
  //     backgroundColor: '#3c3c44',
  //     padding: 10,
  //     textAlign: 'center',
  //     fontWeight: '200',
  //     marginBottom: 15,
  //   },
  //   temp: {
  //     fontSize: 16,
  //     color: 'white',
  //     fontWeight: '100',
  //     textAlign: newLocal,
  //   },
  //   otherContainer: {
  //     paddingRight: 40,
  //   },
});

export default WeatherScroll;
