import { Lions } from "./models/Lions.js"
import { Giraffe } from "./models/Giraffe.js"
import { Eagle } from "./models/Eagle.js"
import { Wolf } from "./models/Wolf.js"


let zoo = []



let lion = new Lions("Simba", "Male", 500, 60, 6);
let giraffe = new Giraffe("Tallrafe", "Female", 600, 12, 300);
let eagle = new Eagle("Birdie", "Male", 4, 7, 18, 125);
let wolf = new Wolf("Balto", 170, "Female", 5, 30, "Grey")

console.log(eagle);
console.log(giraffe);
console.log(lion);
console.log(wolf);


lion.eat("apple");
lion.speak("roar");

zoo.push(eagle);
zoo.push(lion);
zoo.push(giraffe);
zoo.push(wolf);

window.zoo = zoo;



