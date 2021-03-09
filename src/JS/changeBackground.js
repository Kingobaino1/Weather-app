const backgroundImage = (obj) => {
  const bgIcon = document.querySelector('#bg_image');
  switch (obj) {
    case 'Thunderstorm':
      bgIcon.style.backgroundImage = "url('./media/thunder.jpeg')";
      bgIcon.style.backgroundPosition = 'center center';
      bgIcon.style.backgroundRepeat = 'no-repeat';
      bgIcon.style.backgroundSize = 'cover';
      break;

    case 'Drizzle':
      bgIcon.style.backgroundImage = "url('./media/drizzle.jpg')";
      bgIcon.style.backgroundPosition = 'center center';
      bgIcon.style.backgroundRepeat = 'no-repeat';
      bgIcon.style.backgroundSize = 'cover';
      break;

    case 'Rain':
      bgIcon.style.backgroundImage = "url('./media/rain.jpeg')";
      bgIcon.style.backgroundPosition = 'center center';
      bgIcon.style.backgroundRepeat = 'no-repeat';
      bgIcon.style.backgroundSize = 'cover';
      break;

    case 'Snow':
      bgIcon.style.backgroundImage = "url('./media/snow.jpg')";
      bgIcon.style.backgroundPosition = 'center center';
      bgIcon.style.backgroundRepeat = 'no-repeat';
      bgIcon.style.backgroundSize = 'cover';
      break;

    case 'Clouds':
      bgIcon.style.backgroundImage = "url('./media/cloudy.jpg')";
      bgIcon.style.backgroundPosition = 'center center';
      bgIcon.style.backgroundRepeat = 'no-repeat';
      bgIcon.style.backgroundSize = 'cover';
      break;

    case 'Clear':
      bgIcon.style.backgroundImage = "url('./media/clear-sky-bg.jpg')";
      break;

    default:
      bgIcon.style.backgroundImage = "url('./media/night.jpg')";
      break;
  }
};

export default backgroundImage;
