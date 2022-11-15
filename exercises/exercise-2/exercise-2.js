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
function inGryffindorHouse(profil){
  console.log(profil.length)
 const gryffindorHouse = []
profil.find(e => {
 if (e.house === "Gryffindor"){
 gryffindorHouse.push(e)
}
})
const [first, second, third, fourth, fifth] = gryffindorHouse
const {firstName, lastName} = first // do we have to iterate all of it if yes! how? for using destruction is very tedious 
console.log(firstName, lastName) // can you show me how to display them item easily. I am stuck 

//  console.log(gryffindorHouse)
// console.log(gryffindorHouse.length)
}
inGryffindorHouse(hogwarts );
// let [a, b, c, d, e, f, j, h, k, l] =  hogwarts
// const {firstName, lastName, house, pet} = l
// console.log(pet)
