// Crie um sistema que receba 1 array de usúarios e cadastre em outro array apenas os usúarios ativos e maiores de 18 anos;

const users = [
	{ id: 1, name: "John", age: 22, active: true },
	{ id: 2, name: "Mari", age: 24, active: false },
	{ id: 3, name: "Richard", age: 22, active: true },
	{ id: 4, name: "Mike", age: 11, active: false },
	{ id: 5, name: "Ruben", age: 15, active: true },
	{ id: 6, name: "Ane", age: 22, active: false },
	{ id: 7, name: "Michele", age: 12, active: false },
	{ id: 8, name: "Robert", age: 34, active: true },
]

// Método sem SRP
// const currenctUsers = users.filter(user => {
// 	return user.age >= 18 && user.active;
// })

// console.log(currenctUsers);

// Método com SRP
const isActive = (user) => user.active;

const isOfAge = (user) => user.age >= 18;

const correctsUsers = users.filter(user => {
	return isActive(user) && isOfAge(user);
})

console.log(correctsUsers);