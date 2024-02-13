// // Método sem o LSP
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Animal {
// 	move(distance: number): string {
// 		return `This animal is moving a ${distance} meters!`
// 	}
// }
// class Dog extends Animal {
// 	bark() {
// 		console.log("Woof! Woof!");
// 	}
// 	move(distance: number): string {
// 		return `The dog is moving a ${distance} meters!`;
// 	}
// }
// const dog = new Dog();
// const animal = new Animal();
// console.log(animal.move(100));
// console.log(dog.move(100));
// Método com o LSP
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        return "The animal is moving a ".concat(distance, " meters!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
var animal = new Animal();
console.log(animal.move(100));
console.log(dog.move(100));
