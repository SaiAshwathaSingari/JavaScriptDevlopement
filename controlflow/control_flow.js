let userinput = prompt("Enter type: ");
var access;

switch(userinput){
  case "Employee":
    access = "Dietary Services"
    break;
  case "Enrolled Member":
    access = "Dietary Services and one one interaction";
    break;
  case "Subscriber": 
  access = "Partial Access to Dietary Services";
    break;
  case "Non-Subscriber":
  access = "No Access to Dietary Services";
    break;
}
console.log("Access Level: " + access);