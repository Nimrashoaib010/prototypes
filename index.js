// Prototypes
function Dog(name, age, breed){
    this.name = "Sherry";
    this.age = 15;
    this.breed = "Golden";
}

console.log(Dog.prototype);

function Dog(){
    this.name ="Sammy";
    this.age = 7;
    this.breed = "Golden";
}

Dog.prototype.gender = "male"

function Fruit (color, price, quantity){
    this.color = "yellow";
    this.price = 500;
    this.quantity = "onekg"
}

console.log(Fruit.prototype);