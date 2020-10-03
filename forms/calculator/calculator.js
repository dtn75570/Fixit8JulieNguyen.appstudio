calculation.onclick=function(){
  if (optCal.value = "Multiple"){
    calculations = inptNumber1.value * inptNumber2.value
  } else { 
    calculations = inptNumber1.value + inptNumber2.value
} 
  Inputs.value = `Number 1 is inptNumber1.value and number 2 is inptNumber2.value`
  Outputs.value = calculations
console.log(Inputs.value)
console.log(Outputs.value)
}
