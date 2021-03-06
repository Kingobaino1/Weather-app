import './style.css';
import head from './JS/header';

const {
  containerDiv,
  switchBtn,
  text
} = head()

const content = document.querySelector('.content');
content.appendChild(containerDiv);
function scrol(){
  if(switchBtn.checked){
    alert('hello')
  }
}

function enter (e){
  if(e.which === 13){
    const letter = text.value
    console.log(letter.toLowerCase())
  }
}
switchBtn.addEventListener('click', scrol);
text.addEventListener('keypress', enter)