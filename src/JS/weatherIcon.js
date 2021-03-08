const weatherIcon = (obj) => {
  const iconDiv = document.createElement('div');
  iconDiv.className = 'w-25 mx-auto';

  switch (obj) {
    case 'Thunderstorm':
      const thunder = document.createElement('i');
      thunder.className = 'fas fa-5x fa-bolt text-white';
      iconDiv.appendChild(thunder);
      break;

    case 'Drizzle':
      const rainy = document.createElement('i');
      rainy.className = 'fas fa-cloud-rain fa-5x text-white';
      iconDiv.appendChild(rainy);
      break;

    case 'Rain':
      const heavyShower = document.createElement('i');
      heavyShower.className = 'fas fa-7x fa-cloud-showers-heavy text-white';
      iconDiv.appendChild(heavyShower);
      break;

    case 'Snow':
      const snow = document.createElement('i');
      snow.className = 'fas fa-5x fa-snowflake text-white';
      iconDiv.appendChild(snow);
      break;

    case 'Clouds':
      const cloud = document.createElement('i');
      cloud.className = 'fas fa-5x fa-cloud text-white';
      iconDiv.appendChild(cloud);
      break;

    case 'Clear':
      const clearSky = document.createElement('img');
      clearSky.src = './media/clear-sky.png';
      clearSky.setAttribute('alt', 'Clear sky logo');
      iconDiv.appendChild(clearSky);
      break;

    default:
      const sunny = document.createElement('i');
      sunny.className = 'fas fa-5x fa-cloud-sun text-white';
      iconDiv.appendChild(sunny);
      break;
  }
  return iconDiv;
};

export default weatherIcon;
