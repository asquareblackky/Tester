// >=80 && <=100 "A"
// >=65 && < 80 "B"
// >=50 && < 65 "C"
// >=40 && < 50 "B"
// <40 "You are a failure"

let score = 39

if(score >=80 && score <=100){
    console.log("A");     
}else if(score >=65 && score <80){
    console.log("B");
    
}else if(score >=50 && score <65){
    console.log("C");
    
}else if(score >=40 && score <50){
    console.log("D");
    
}else if(score >=0 && score <40){
    console.log("You are a failure");
    
}else{
    console.log("invalid score");
}
    
    
// }

// let login = false;

// login == true ? console.log("login successful") : console.log("invalid login");