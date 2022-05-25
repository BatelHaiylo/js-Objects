// var maneger = {
//     firstName : "Gohan" ,
//     lasttName : "Chan" , 
//     age : 26 ,
//     salerry : 35000
// }

// var employe = {
//     name : "Goten Chan" ,
//     yearOfBirth : 2000 ,
//     mail : "goten222@mahamachav.com" ,
//     address : "Maze Pinat Mapo 24/1"
// }
// var fruit = {
//     name : "cocoa",
//     color : "brown",
//     type : "tropical" 
// }

// document.write(fruit.name + "<br>")
// document.write(fruit.color + "<br>")
// document.write(fruit.type + "<br>")

// var classRoom = {
//     classNum : 5 , 
//     studentsNum : 58 , 
//     studentsName : ["a","b","c","d","e"] 
// }

// for (var i = 0; i < classRoom.studentsName.length; i++) {
//     document.write("<br>"+classRoom.studentsName[i]+"<br>");
// }

// var checkKeyValue = studentsName
// document.write(classRoom[checkKeyValue]);

var kinderGarten = {
    kinderGartenTeacher : "Ms.Brorya" , 
    kinderNum : 10 ,
    kindeName : ["a","b","c","d","e","f","g","h","i","j"] 
}

for (let i = 0; i < kinderGarten.kindeName.length; i++) {
    document.write((kinderGarten["kindeName"][i])+"<br>")
}

var userKey = prompt()
document.write(kinderGarten[userKey])