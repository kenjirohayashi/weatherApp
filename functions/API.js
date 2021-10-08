export const getWether = async (lat, lon) => {
  const query_params = new URLSearchParams({
    appid: 'f3a0c0c5852f5782153675928be12cb5',
    lat: lat, //緯度
    lon: lon, //経度
    units: 'metric', //温度の単位を摂氏に
  });
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/onecall?' + query_params,
  );
  const weatherData = await response.json();
  return weatherData;
  // setData(weatherData);
  // console.log(JSON.stringify(weatherData) + 'aaaa');
};