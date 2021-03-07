const deg = (value, unit) => {
  if(!unit){
    const twoDecimalPoints = (value * (9 / 5) + 32);
    const result = Math.round(twoDecimalPoints * 100) / 100;
    console.log(`${result}°F`);
  } else if(unit){
    console.log(`${value}°C`);
  }
};

export default deg;
