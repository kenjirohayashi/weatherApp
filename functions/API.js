export async function getWether(lat, lon) {
  const query_params = new URLSearchParams({
    appid: 'f3a0c0c5852f5782153675928be12cb5',
    lat: lat, //緯度
    lon: lon, //経度
  });
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?' + query_params,
  );
  const data = await response.json();
  return data;
}
