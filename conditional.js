//conditional statements

let age = 10;
if (age <= 9) {
    console.log("You should not think about driving");
}
else if (age>9 && age<=16) {
    console.log("You can think about driving");
}
else {
    console.log("You are eligible");
}
// Second Program
let temp = 25;
if (temp > 30) {
    console.log("It's hot");
}
else if (temp >20) {
    console.log("It's warm");
}
else {
    console.log("It's cold");
}

//switch case

  var grade = 'A'; 
            console.log("Entering switch block"); 
            switch (grade) { 
               case 'A': console.log("Good job"); 
               break; 
             
               case 'B': console.log("Pretty good"); 
               break; 
             
               case 'C': console.log("Passed"); 
               break; 
             
               case 'D': console.log("Not so good"); 
               break; 
             
               case 'F': console.log("Failed"); 
               break; 
             
               default:  console.log("Unknown grade") 
            } 
            console.log("Exiting switch block");