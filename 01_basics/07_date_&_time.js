let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let newlyCreatedDate = new Date("2024-02-12")
console.log(newlyCreatedDate.toLocaleString());