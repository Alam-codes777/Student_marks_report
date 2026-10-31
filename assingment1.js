let Name = "Rahul kumar";
let rollno = 101;
let marks = [78,85,62,91,34];
let deparment = "cse"
let totalmarks = 500;
console.log("student:-",Name);
console.log("Roll no. = ", rollno)
function calculatemarks(marks){
    let totalmarks = 0;
    for(let x = 0; x<marks.length; x++){
        totalmarks += marks[x]
    }
    return totalmarks;
}
    console.log("total marksmarks: " ,calculatemarks(marks));
function calculatepercentage(marks){
    let percentage = (calculatemarks(marks)/totalmarks)*100;
    return percentage;
}
    console.log("percentage:", calculatepercentage(marks),"%")
function findhigest(marks){
    let max = marks[0]
    for(let x = 0; x<marks.length; x++){
        if(marks[x]>max){
            max = marks[x]
        }
    }
    return max;
}
    console.log("higest mark:",findhigest(marks))

function findhlowest(marks){
    let small = marks[0]
    for(let x = 0; x<marks.length; x++){
        if(marks[x]<small){
            small = marks[x]
        }
    }
    return small
}
console.log("lowest mark:",findhlowest(marks))
let count = 0;
for(let x = 0; x<marks.length; x++){
    if(marks[x] >= 40 ){
        count++
    }
}
console.log("passed subject :",count)
console.log("name in upper casse:",Name.toUpperCase())
let COUNT = 0;
for(let x = 0; x<Name.length; x++){
    if(Name[x] !== " "){
        COUNT++
    }
}
console.log("letters in name:",COUNT)

function Percentage(marks){
    let sum = 0;
    for(let x= 0; x<marks.length; x++){
        sum += marks[x]
    }
    let percent = (sum/500)*100
    return percent;
    }
if (Percentage(marks) >= 95 ){
    console.log("excellent")
} else if (Percentage(marks) >=90) {
    console.log("good")
} else if (Percentage(marks) >=80 ){
    console.log("avrage")
} else {
    console.log("need improvement")
}





