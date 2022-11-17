let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];
// // ## Task 1

// - In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
// - Use array destructuring to extract the values you need out of the array.

// ### Expected result

// ```
// Harry Potter
// Ron Weasley
// Hermione Granger
// Minerva McGonagall
// Albus Dumbledore
// ```
console.log("======= Task1 ========")
function inGryffindorHouse(profil){
 const gryffindorHouse = []
profil.map(e => {
 if (e.house === "Gryffindor"){
 gryffindorHouse.push(e)
}
})
return gryffindorHouse
}
 const inGryffindorArray = inGryffindorHouse(hogwarts)  //I was trying the destructuring technic not nesting I will send you this code a let me know 
 inGryffindorArray.map(e => {const {firstName, lastName} = e // This what I wanted for the destruturing I think it is most better than the previous
  console.log(firstName, lastName)                          // let me know in slack or getHub
})

// ## Task 2

// - In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
// - Use array destructuring to extract the values you need out of the array.

// ### Expected result

// ```
// Albus Dumbledore
// ```
 

console.log("======================")
console.log("======= Task2 ========")
console.log("======================")
function teachersWithPet(profil){
const petArr = []
  for (let i = 0; i < profil.length; i++){
    if (profil[i].pet !== null){
      petArr.push(profil[i])

    }
  }
return petArr;
}
const teachersWithPetArray = teachersWithPet(hogwarts)
teachersWithPetArray.map(e => {const {firstName, lastName, pet} = e // This what I wanted for the destruturing I think it is most better than the previous
  console.log(firstName, lastName, pet)                               // let me know in slack or getHub
})


 


