document.getElementById("calc").addEventListener("click", convert);

function convert() {
  // Input
  let num1 = +document.getElementById("num1").value;
  //   Process
  let tif = (num1 - 32) * (5 / 9);
  // Output
  document.getElementById("output").innerHTML = Math.round(tif);
}
