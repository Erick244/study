// // Método sem o LSP

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

class Animal {
	move(distance: number): string {
		return `The animal is moving a ${distance} meters!`
	}
}

class Dog extends Animal {
	bark() {
		console.log("Woof! Woof!");
	}
}

const dog = new Dog();
const animal = new Animal();
console.log(animal.move(100));
console.log(dog.move(100));