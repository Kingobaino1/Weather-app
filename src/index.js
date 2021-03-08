import './style.css';
import head from './JS/header';
// import data from './JS/fetchData';
import weatherIcon from './JS/weatherIcon';
import deg from './JS/tempConversion';
import report from './JS/displayReport';


// const { iconDiv } = weatherIcon('Rain')

const {
  containerDiv,
  switchBtn,
  text,
} = head();


const content = document.querySelector('.content');
const section = document.querySelector('.details');
content.appendChild(containerDiv);
// section.appendChild(weatherIcon('Clouds'));

async function data(city){
  const url = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=700bca0642ce1cbc0f9e5ca93c0ea7ef`, { mode: 'cors' })
  const responds = await url;
  const result = responds.json();
  const value = await result;
  // report(value);
  section.appendChild(report(value));
}

data('awka');

function scroll(){
  deg(-12, !switchBtn.checked);
}

function enter (e){
  if(e.which === 13){
    const letter = text.value
    console.log(letter.toLowerCase())
  }
}
switchBtn.addEventListener('click', scroll);
text.addEventListener('keypress', enter)
scroll()