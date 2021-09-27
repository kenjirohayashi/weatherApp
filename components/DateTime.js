import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment-timezone';

const WetherItem = props => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{props.title}</Text>
      <Text style={styles.weatherItemTitle}>
        {props.value} {props.unit}
      </Text>
    </View>
  );
};

const Days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DateTime = ({lat, lon, timezone, current}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const APHour = hour > 12 ? hour % 12 : hour;
    const minute = time.getUTCMinutes();
    const ampm = hour > 12 ? 'pm' : 'am';

    setTime(
      (APHour < 10 ? '0' + APHour : APHour) +
        ':' +
        (minute < 10 ? '0' + minute : minute) +
        ampm,
    );
    setDate(Days[day] + ',' + date + '' + Months[month]);
  }, []);

  // console.log(current);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WetherItem title="湿度" value={current ? current.humidity : ""} unit="%" />
          <WetherItem title="気圧" value={current ? current.pressure : ""} unit="hPa" />
          <WetherItem
            title="日の出"
            value={current ? moment(current.sunrise, 'X').tz(timezone).format("HH:mm") : ""}
            unit="am"
          />
          <WetherItem
            title="日の入り"
            value={current ? moment(current.sunset, 'X').tz(timezone).format('HH:mm'): ''}
            unit="pm"
          />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{timezone}</Text>
        <Text style={styles.latlong}>{lat}N  {lon}E</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 15,
  },
  heading: {
    fontSize: 45,
    color: 'black',
    fontWeight: '200',
  },
  subheading: {
    marginTop: 20,
    fontSize: 25,
    color: 'black',
    fontWeight: '300',
  },
  rightAlign: {
    marginTop: 20,
  },
  timezone: {
    fontSize: 18,
    color: 'black',
  },
  latlong: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 12,
    color: 'black',
    fontWeight: '700',
  },
  weatherItemContainer: {
    backgroundColor: '#cccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherItemTitle: {
    color: 'black',
    fontSize: 17,
    fontWeight: '200',
  },
});

export default DateTime;
