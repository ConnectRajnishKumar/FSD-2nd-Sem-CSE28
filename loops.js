//for loop

let n = 5; let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
    console.log(sum);
}
 console.log(sum);

 //while loop
 let count = 0;
 while (count < 5) {
     console.log(count);
     count++;
 }


 //do while loop
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);


    //objects in JavaScript

    let student = {
        Name : "Hari",
        Roll : 1234,
        email : "hari@gmail.com",

}
    console.log(student);



    //Arrays in JavaScript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);
    arr.push(6);
    console.log(arr);


    let fruits = ["Apple", "Banana", "Cherry"];
    console.log(fruits);
    console.log(fruits[1]);
    fruits.push("Mango");
    console.log(fruits);
    fruits.pop();
    console.log(fruits);