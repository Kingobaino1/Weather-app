// async function data(city){
//   const url = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=700bca0642ce1cbc0f9e5ca93c0ea7ef`, { mode: 'cors' })
//   const responds = await url;
//   const result = responds.json();
//   const value = await result;
//   const weather = value.weather;
//   const cityName = value.name;
//   // console.log(cityName)
//   // console.log(weather)
//   return {
//     weather,
//     cityName
//   }
// }

// export default data;