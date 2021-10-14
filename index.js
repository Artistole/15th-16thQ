var readLineSync = require('readline-sync');

var ram =
{
  name: "ram",
  age: "25",
  yuga: "treta",
  power: "2500"
}

var krishna =
{
  name: "krishna",
  age: "31",
  yuga: "dwapar",
  power: "2325"

}

function god(parameterOne,parameterTwo)
{
  if(parameterOne.age>parameterTwo.age)
    console.log("ram is older")
  else
  console.log("krishna is older")  

  if(parameterOne.power>parameterTwo.power)
  console.log("ram is more powerful")
  else
  console.log("krishna is more powerful")
}

god(ram,krishna);
