import './style.css';
import head from './JS/header';
import deg from './JS/tempConversion';
import report from './JS/displayReport';

let tempVal;
let tempMin;
let tempMax;

const {
  containerDiv,
  text,
  switchBtn,
} = head();

const content = document.querySelector('.content');
const section = document.querySelector('.details');
content.appendChild(containerDiv);

const scroll = () => {
  const cel = document.querySelector('#cel');
  const celMin = document.querySelector('#celMin');
  const celMax = document.querySelector('#celMax');

  if(switchBtn.checked) {
    cel.textContent = deg(tempVal);
    celMin.textContent = deg(tempMin);
    celMax.textContent = deg(tempMax);
  } else if(!switchBtn.checked) {
    cel.textContent = `${Math.round(tempVal * 100) / 100}°C`;
    celMin.textContent = `${Math.round(tempMin * 100 ) / 100}°C`;
    celMax.textContent = `${Math.round(tempMax * 100) / 100}°C`;
  };
};

async function data(city){
  const url = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=700bca0642ce1cbc0f9e5ca93c0ea7ef`, { mode: 'cors' })
  const responds = await url;
  const result = responds.json();
  const value = await result;
  tempVal = value.main.temp - 273.15;
  tempMin = value.main.temp_min - 273.15;
  tempMax = value.main.temp_max - 273.15;
  section.appendChild(report(value));
}

const enter = (e) => {
  if(e.which === 13){
    section.innerHTML = '';
    const letter = text.value.toLowerCase();
    data(letter);
    text.value = '';
    switchBtn.checked = false;
  }
};

text.addEventListener('keypress', enter);
switchBtn.addEventListener('click', scroll);

data('awka');
