const weatherIcon = (obj) => {
  const iconDiv = document.createElement('div');
  iconDiv.className = 'w-25 mx-auto';

  const thunder = document.createElement('i');
  const rainy = document.createElement('i');
  const heavyShower = document.createElement('i');
  const snow = document.createElement('i');
  const cloud = document.createElement('i');
  const clearSky = document.createElement('img');
  const sunny = document.createElement('i');

  switch (obj) {
    case 'Thunderstorm':
      thunder.className = 'fas fa-5x fa-bolt text-white';
      iconDiv.appendChild(thunder);
      break;

    case 'Drizzle':
      rainy.className = 'fas fa-cloud-rain fa-5x text-white';
      iconDiv.appendChild(rainy);
      break;

    case 'Rain':
      heavyShower.className = 'fas fa-7x fa-cloud-showers-heavy text-white';
      iconDiv.appendChild(heavyShower);
      break;

    case 'Snow':
      snow.className = 'fas fa-5x fa-snowflake text-white';
      iconDiv.appendChild(snow);
      break;

    case 'Clouds':
      cloud.className = 'fas fa-5x fa-cloud text-white';
      iconDiv.appendChild(cloud);
      break;

    case 'Clear':
      clearSky.src = './media/clear-sky.png';
      clearSky.setAttribute('alt', 'Clear sky logo');
      iconDiv.appendChild(clearSky);
      break;

    default:
      sunny.className = 'fas fa-5x fa-cloud-sun text-white';
      iconDiv.appendChild(sunny);
      break;
  }
  return iconDiv;
};

export default weatherIcon;
