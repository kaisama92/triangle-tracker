function handleTriangle(event) {
  event.preventDefault();
  let inputA = parseInt.document.getElementById("inputA");
  let inputB = parseInt.document.getElementById("inputB");
  let inputC = parseInt.document.getElementById("inputC");
  let output = document.querySelector("output")

  function triangleCalc() {
    if (inputA === inputB && inputB === inputC) {
      output = "equilateral"
    } else if ((inputA ===  inputB && !inputC) || (inputA ===  inputC && !inputB) || (inputB === inputC && !inputA)) {
      output = "isosceles"
    } else if (inputA !== inputB && inputA !== inputC && inputB !== inputC) {
      output = "scalene" 
    } else if (inputA + inputB <= inputC){
      output = "not a triangle"
    } else if (inputB + inputC <= inputA){
      output = "not a triangle"
    } else if (inputA + inputC <= inputB){
      output = "not a triangle"
    }
  }
  document.getElementById("output").innerText = output;
}

window.addEventListener("load", function() {
  const form = document.getElementById("Triangles");
  form.addEventListener("submit", handleTriangle);
});




