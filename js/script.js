console.log("1")
let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]


let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

for (item of arr) {
    if (item["completed"] == true) {
        a.arr.push(item)
    }
    else if (item["completed"] == false) {
        b.arr.push(item)
    }
    else {
        console.log("Error!")
    }
}

a.count = a.arr.length
b.count = b.arr.length

console.log(arr)
console.log(a)
console.log(b)

console.log("")
////////////////////////////////////////////////////////
console.log("2")


let arr2 = [4, 16, 19, 22, 11, 144, 967, 19124]
let even = []
let odd = []

for (item of arr2) {
    if (item % 2 == 0) {
        even.push(item)
    }
    else if (item % 2 != 0) {
        odd.push(item)
    }
    else {
        console.log("Error!")
    }
}

console.log(arr2)
console.log(even)
console.log(odd)


console.log("")
////////////////////////////////////////////////////////
console.log("3")

let cars = [
    {
        model: "Malibu",
        price: 45000,
    },
    {
        model: "Maserati",
        price: 215000,
    },
    {
        model: "M3GTR",
        price: 255000,
    },
    {
        model: "Cobalt",
        price: 15000,
    },
    {
        model: "Tracker",
        price: 25000,
    },
    {
        model: "Neksiya",
        price: 12000,
    },
    {
        model: "Jentra",
        price: 18000,
    },
]
let cheap = []

for (item of cars) {
    if (item.price < 35000) {
        cheap.push(item)
    }
}

console.log(cars)
console.log(cheap)


console.log("")
////////////////////////////////////////////////////////
console.log("4")

let index = +prompt("Введите индекс того, кого вы хотите удалить")

let arr4 = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']

console.log(arr4)

if (index < arr4.length && index >= 0) {
    alert(`${arr4[index]} удалён`)
    arr4.splice(index, 1)
}
else {
    alert("Такого нету")
}

console.log(arr4)



console.log("")
////////////////////////////////////////////////////////
console.log("5")


let arr5 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]


let numbers = []
for (item of arr5) {
    if (typeof (item) == "number") {
        numbers.push(item)
    }
}

console.log(numbers)

if (numbers.length > 5) {
    console.log("гуд")
} else {
    console.log("!гуд")
}



console.log("")
////////////////////////////////////////////////////////
console.log("6")


let myCitys = ["London", "Berlin", "Tokyo", "Moskau", "Parij", "Monako"]

for (item of myCitys) {
    console.log(`${item} is at the index ${myCitys.indexOf(item)} in the myCities array`)
}