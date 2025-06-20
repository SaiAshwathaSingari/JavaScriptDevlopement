function calculateArea(){
  let length;
  let width;
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);
  var area = length * width;
  let res = document.getElementById("result");
  res.innerText = `The area of the rectangle is ${area}`;
}