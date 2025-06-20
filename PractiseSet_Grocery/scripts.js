function calculate(){
  var g1,g2,g3;
  g1 = parseFloat(document.getElementById("g1").value);
  g2 = parseFloat(document.getElementById("g2").value);
  g3 = parseFloat(document.getElementById("g3").value);
  var total;
  total = g1+g2+g3;
  let res = document.getElementById("result");
  res.innerText = `Total is equal to ${total}`;
}