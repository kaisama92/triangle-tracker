let inputA = parseInt.document.getElementById("inputA");
let inputB = parseInt.document.getElementById("inputB");
let inputC = parseInt.document.getElementById("inputC");
let output = document.querySelector("output")

function (triangleCalc) {
  if (inputA === inputB && inputB === inputC) {
    output = "equilateral"
  } else if ((inputA ===  inputB && !inputC) || (inputA ===  inputC && !inputB) || (inputB === inputC && !inputA)) {
    output = "isosceles"
  } else if (inputA !== inputB && inputA !== inputC && inputB !== inputC) {
    output = "scalene" 
  }
}