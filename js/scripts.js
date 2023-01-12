function handleTriangle(event) {
  event.preventDefault();
  let inputA = parseInt(document.querySelector("input#inputA").value);
  let inputB = parseInt(document.querySelector("input#inputB").value);
  let inputC = parseInt(document.querySelector("input#inputC").value);
  let output = document.querySelector("output")
  
  console.log("A = " + inputA)
  console.log("B = " + inputB)
  console.log("C = " + inputC)
  console.log("output = " + output)
  
  // function triangleCalc(event) {
    console.log("It hasn't broken yet")
    if ((inputA + inputB <= inputC) || (inputB + inputC <= inputA) || (inputA + inputC <= inputB)){
    output = "not a triangle"
    }  
    else if ((inputA === inputB && inputA !== inputC) || (inputA ===  inputC && inputA !== inputB) || (inputB === inputC && inputB !== inputA)) {
      console.log("It hasn't broken yet 3")
      output = "isosceles";
    } 
    else if (inputA === inputB && inputB === inputC) {
      output = "equilateral";
      console.log("It hasn't broken yet 2")
    } 
    
    else if (inputA !== inputB !== inputC !== inputA) {
      output = "scalene" ;
      console.log("It hasn't broken yet 4")
    }  
    
    
  
  document.getElementById("output").innerText = output;
}

window.addEventListener("load", function() {
  const form = document.getElementById("Triangles");
  form.addEventListener("submit", handleTriangle);
});




