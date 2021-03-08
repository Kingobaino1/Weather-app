import weatherIcon from './weatherIcon';

const report = (obj) => {
  
  const container = document.createElement('div');

  const logo = document.createElement('div');
  logo.className = 'w-50 d-flex mx-auto';

  const logoDescription = document.createElement('div');
  logoDescription.className = 'd-flex flex-column';

  const deg = document.createElement('h4');
  deg.className = 'text-white mt-3';
  deg.setAttribute('id', 'cel');
  deg.textContent = `${Math.round((obj.main.temp - 273.15) *100) / 100 }°C`;

  const description = document.createElement('h6');
  description.className = 'text-white';
  description.textContent = obj.weather[0].description;

  logoDescription.append(deg, description);
  logo.append(weatherIcon(obj.weather[0].main), logoDescription);

  const city = document.createElement('div');
  city.className = 'w-50 mx-auto';

  const cityName = document.createElement('h1');
  cityName.className = 'text-white align';
  cityName.textContent = `${obj.name}, ${obj.sys.country}.`;

  city.append(cityName);

  const details = document.createElement('div');
  details.className = 'row mt-5 pt-5';

  const min = document.createElement('div');
  min.className = 'd-flex col-6 flex-column mt-5';

  const minValue = document.createElement('div');
  minValue.className = 'text-dark bg-secondary w-25 mx-auto value';
  minValue.setAttribute('id', 'celMin');
  minValue.textContent = `${Math.round((obj.main.temp_min - 273.15) * 100) / 100 }°C`;

  const minText = document.createElement('div');
  minText.className = 'text-white text mt-2 mx-auto';
  minText.textContent = 'Min. Temp';

  const max = document.createElement('div');
  max.className = 'd-flex col-6 flex-column mt-5';

  const maxValue = document.createElement('div');
  maxValue.className = 'text-dark bg-secondary w-25 mx-auto value';
  maxValue.setAttribute('id', 'celMax');
  maxValue.textContent = `${Math.round((obj.main.temp_max - 273.15) * 100) / 100 }°C`;

  const maxText = document.createElement('div');
  maxText.className = 'text-white mt-2 text mx-auto';
  maxText.textContent = 'Max. Temp';

  const pressure = document.createElement('div');
  pressure.className = 'd-flex col-6 flex-column mt-3';

  const pressureValue = document.createElement('div');
  pressureValue.className = 'text-dark bg-secondary w-25 mx-auto value';
  pressureValue.textContent = obj.main.pressure;

  const pressureText = document.createElement('div');
  pressureText.className = 'text-white text mt-2 mx-auto';
  pressureText.textContent = 'Pressure';

  const humidity = document.createElement('div');
  humidity.className = 'd-flex col-6 flex-column mt-3';

  const humidityValue = document.createElement('div');
  humidityValue.className = 'text-dark bg-secondary w-25 mx-auto value';
  humidityValue.textContent = `${obj.main.humidity}%`;

  const humidityText = document.createElement('div');
  humidityText.className = 'text-white text m-2 mx-auto';
  humidityText.textContent = 'Humidity';

  min.append(minValue, minText);
  max.append(maxValue, maxText);
  pressure.append(pressureValue, pressureText);
  humidity.append(humidityValue, humidityText);

  const date = document.createElement('div');
  date.className = 'w-50 mx-auto mt-4';

  const d = new Date();
  const day = d.getDate();
  const year = d.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const monthName = months[d.getMonth()];
  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  const dayName = days[d.getDay()];
  const formatted = `${dayName}, ${day} ${monthName} ${year}`;

  const dateValue = document.createElement('h4');
  dateValue.className = 'text-white align';
  dateValue.textContent = formatted;

  date.append(dateValue);

  details.append(min, max, pressure, humidity);
  container.append(logo, city, details, date);
  return container;
};

export default report;
