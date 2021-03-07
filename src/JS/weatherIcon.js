const weatherIcon = (obj) => {
  const iconDiv = document.createElement('div');
  iconDiv.className = 'w-50 mx-auto';
  
  switch (obj) {
    case 'Thunderstorm':
      const thunder = document.createElement('i');
      thunder.className = 'fas fa-5x fa-bolt text-white';
      break;

    case 'Drizzle':
      const rainy = document.createElement('i');
      rainy.className = 'fas fa-cloud-rain fa-5x text-white';
      break;

    case 'Rain':
      const heavyShower = document.createElement('i');
      heavyShower.className = 'fas fa-5x fa-cloud-showers-heavy text-white';
      break;

    case 'Snow':
      const snow = document.createElement('i');
      snow.className = 'fas fa-5x snowflake text-white';
      break;

    case 'Cloud':
      const cloud = document.createElement('i');
      cloud.className = 'fas fa-5x fa-cloud text-white';
      break;

    case 'Clear':
      const clearSky = document.createElement('img');
      clearSky.src = './media/clear-sky.png';
      clearSky.setAttribute('alt', 'Clear sky logo');
      break;
  
    default:
      const sunny = document.createElement(i);
      sunny.className = 'fas fa-5x fa-cloud-sun text-white';
      break;
  }
};

export default weatherIcon;
