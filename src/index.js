import './style.css';
import head from './JS/header';
import data from './JS/fetchData';
import weatherIcon from './JS/weatherIcon';
import deg from './JS/tempConversion';


// const { iconDiv } = weatherIcon('Rain')

const {
  containerDiv,
  switchBtn,
  text,
} = head();

const content = document.querySelector('.content');
const section = document.querySelector('.details');
content.appendChild(containerDiv);
section.appendChild(weatherIcon('Clouds'));

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