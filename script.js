/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  // use array.map() func to filter out employees with profession as developer
  // use array.filter() to remove the falsely values("") from the developers array
  let developers = arr.map(findDevelopers).filter(element => element);
  
  function findDevelopers(element, index, array){
    return element.profession === "developer" ? element : "";
  }

  for (let dev in developers){
    console.log(developers[dev]); // print the details of the filtered out employees
  }
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  // use array.filter() to filter employees with profession as developer
  let developers = arr.filter(element => element.profession === "developer");

  // use array.forEach() to print details of the filtered out employees
  developers.forEach(element => console.log(element));
}

function addData() {
  //Write your code here, just console.log

  // create fourth employee
  var employee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  }
  arr.push(employee); // add it to the original array
  console.log(arr[3]); // print the added employee
}

function removeAdmin() {
  //Write your code here, just console.log

  // filter out all employees with profession !== "admin"
  let withoutAdmin = arr.filter(element => element.profession !== "admin");

  // print the newly filtered array
  console.log(withoutAdmin);
}

function concatenateArray() {
  //Write your code here, just console.log

  // create a new array
  let arr2 = [
  	{ id: 5, name: "harry", age: "21", profession: "analyst", salary: "6LPA" },
  	{ id: 6, name: "robert", age: "23", profession: "tester", salary: "4LPA" },
  	{ id: 7, name: "james", age: "25", profession: "manager", salary: "8LPA" },
  ];

  // use .concat() method to concatenate arr & arr2 and store in a third array named combo
  let combo = arr.concat(arr2);

  // finally, print combo
  console.log(combo);
}
