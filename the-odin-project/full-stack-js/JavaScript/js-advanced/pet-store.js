function animal (name, breed, sex, health) {
    this.name = name;
    this.breed = breed;
    this.sex = sex;
    this.health = health;
    this.stomach = [];
}

animal.prototype.getName = function () {
    return this.name;
}

animal.prototype.getBreed = function () {
    return this.breed;
}

animal.prototype.getSex = function () {
    return this.sex;
}

animal.prototype.getHealth = function () {
    return this.health;
}

animal.prototype.getStomach = function () {
    return this.stomach;
}

animal.prototype.feed = function(food){
    // this.stomach.push(food);
    return this.name + " is fed";
}

animal.prototype.play = function(){
    return this.name + " is having fun.";
}

const spotty = new animal('Spotty', 'Dog', 'male', true);
console.log(spotty.feed("milk bone"));
console.log(spotty.feed("peanut butter"));
console.log(spotty.getStomach());

function dog(name, sex, health, temperament) {
    this.name = name;
    this.sex = sex;
    this.health = health;
    this.temperament = temperament;
    this.breed = "Dog";
}

dog.getTemperament = function() {
    return this.temperament;
}

dog.prototype = Object.create(animal.prototype);

const fluffy = new dog('fluffy', 'female', true, 'hyper');

console.log(fluffy.getName());
console.log(fluffy.getBreed());
console.log(fluffy.getSex());
console.log(fluffy.getHealth());
// console.log(fluffy.getTemperament());
console.log(fluffy.feed('blueberry'));
console.log(fluffy.getStomach());




