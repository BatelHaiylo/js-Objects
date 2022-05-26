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

// var kinderGarten = {
//     kinderGartenTeacher : "Ms.Brorya" , 
//     kinderNum : 10 ,
//     kindeName : ["a","b","c","d","e","f","g","h","i","j"] 
// }

// for (var i = 0; i < kinderGarten.kindeName.length; i++) {
//     document.write((kinderGarten["kindeName"][i])+"<br>")
// }

// var userKey = prompt()
// document.write(kinderGarten[userKey])

// var course = {}
// course.courseNum = prompt()
// course.studentseNum = prompt()
// course.studentsAge = prompt()
// console.log(course);

// var myObject = {};
//  document.write(myObject[prompt("enter key:")] = prompt("enter value:"));
 
// var teacher = {};

// var nameKey = prompt();
// var nameValue = prompt();

// console.log(teacher[nameKey] = nameValue);




// var boss = {};

// var fNameKey = prompt();
// var lNameKey = prompt();
// var ageKey =+ prompt();
// var sallery =+ prompt();

// boss[fNameKey] = prompt("enter first name value");
// boss[lNameKey] = prompt("enter last name value");
// boss[ageKey] = prompt("enter age value");
// boss[sallery] = prompt("enter sallery value");

// console.log(boss);

// var boss = {};

// for (var i = 0; i < 4; i++) {
//     boss[prompt()] = prompt("enter first name value");
// }
// console.log(boss);

// var user = {};

// for (var i = 0; i < 4; i++) {
//     document.write(user[prompt("enter key")] = (prompt("enter value"))+"<br>" +"</div>");
// }


// var myTeacher = {};

// for(var i =0; i<2; i++;){
//     var  myValue = prompt("enter your value")
//     var  myKey = prompt("enter your key")
//     myTeacher[myKey] = myValue
//     document.write("<div>" + myTeacher[myKey] + "</div>")
// }


// var user 

// document.write("<div>"+user.name+" "+user.age+" "+user.email+"</div>")

// var car = {
//     company: "",
//     color: "",
//     kilometragh :0 ,
//     year: 0,
// };

// for(i=0; i<4; i++){
//     car.company= prompt("enter your value")
//     car.color  = prompt("enter your value")
//     car.kilometragh  =+ prompt("enter your value")
//     car.year  =+ prompt("enter your value")

//     document.write("<div>" + car.company + car.color + car.kilometragh + car.year + "</div>")
// }

// function carData(){
// var carsArray = [];

// for(i=0; i<4; i++){
//     var car = {};
//     car.company= prompt("enter your car company");
//     car.color  = prompt("enter your car color");
//     car.kilometragh  =+ prompt("enter your car kilometragh");
//     car.year  =+ prompt("enter your car year");

//     carsArray.push(car);

//     document.write("<div>" + car.company +" "+ car.color +" "+ car.kilometragh +" "+ car.year + "</div>");
// }
// console.log(carsArray);
// }
// carData();

// function catObjects(){
//     var catArray = [];
//     for (let i = 0; i < 3; i++) {
//         var cat = {};

//         cat.name = prompt("enter a cat name");
//         cat.yearOfBirth = prompt("enter the cat year of birth");
//         cat.type = prompt("enter the cat type");
//         cat.width = prompt("enter the cat width");

//         catArray.push(cat);

//         document.write("<h1>"+cat.name+" "+cat.yearOfBirth+" "+cat.type+" "+cat.width+ "</h1>");
//     }
// }

// function dogObject(){

//     var userNumber =+ prompt("enter a number");
//     var dogArray = [];

//     for(i=0; i<userNumber; i++){

//         var dog = {};

//         dog.name = prompt("enter the dog name");
//         dog.age = prompt("enter the dog age");
//         dog.type = prompt("enter the dog type");
//         dog.owners = prompt("enter the dog owners name");

//         dogArray.push(dog);

//         document.write("<p>"+dog.name +" "+dog.age +" "+dog.type+" "+dog.owners+" "+"</p>")
//     }
// }

// function bugObject(){
//     var userNumber =+ prompt("enter a number");
//     var bugArray = [];

//     for(i=0; i<userNumber; i++){

//         var bug = {};
//         bug.name = prompt("enter a bug name");
//         bug.scientificName = prompt("enter the bug scientific name");
//         bug.numLegs =+ prompt("how many legs does the bug have?");
//         bug.wings = confirm("does the bug have wings");

//         if(bug.wings){
//             document.write("<h3>"+bug.name +" "+bug.scientificName +" "+bug.numLegs+" "+bug.wings+"</h3>");
//             bugArray.push(bug);
//         };

//     };
// }

// function kidObject(){
//     var userNumber =+ prompt("enter a number");
//     var kidArray = [];

//     for(i=0; i<userNumber; i++){

//         var kid = {};
//         kid.name = prompt("enter a kid name");
//         kid.age =+ prompt("enter a kid age");
//         kid.kinderGarten = confirm("does the kid go to kindergarten");

//         if(kid.age>4){
//             document.write("<p>"+kid.name +" "+kid.age +" "+kid.kinderGarten+"</p>");
//             kidArray.push(kid);
//         };
//     };
// };

// function computerObject(number){
//     var computerArray = [];

//     for(i=0; i<number; i++){

//         var computer = {};
//         computer.company = prompt("enter a computer company");
//         computer.model = prompt("enter the computer model");
//         computer.width =+ prompt("enter a computer width");
//         computer.isStock = confirm("are there computers in stock");

//         if(computer.isStock && computer.width>2){
//             document.write("<p>"+computer.company+" "+computer.model+" "+computer.width+" "+computer.stock+"</p>");
//             computerArray.push(computer);
//         };
//     };
// };

// function teacherObject(number){
//     var teacherArray = [];

//     for(i=0; i<number; i++){

//         var teacher = {};
//         teacher.fullName = prompt("enter the teacher full name");
//         teacher.HourlyWage =+ prompt("enter the teacher hourly wage");
//         teacher.mail = prompt("enter the teacher email");
//         teacher.yearOfBirth = prompt("enter the teacher year of birth");

//         if(teacher.HourlyWage>100 || teacher.yearOfBirth<1990){
//             document.write("<span>"+teacher.fullName+" "+teacher.HourlyWage+" "+teacher.mail+" "+teacher.yearOfBirth+"</span>");
//             teacherArray.push(teacher);
//         };
//     };
// };

// function furnitureObject(number){

//     for(i=0; i<number; i++){

//         var furniture = {};
//         furniture.name = prompt("enter the furniture name");
//         furniture.brand = prompt("enter the furniture brand");
//         furniture.price =+ prompt("enter the furniture price");

//         var furnitureStoresArray = [];
//         var numberOfStores =+ prompt("The number of furniture stores available:")

//         for(j=0; j<numberOfStores; j++){
//             furniture.storesArray = prompt("enter the furniture stores");
//             furnitureStoresArray.push(furniture.storesArray);
//         }

//         document.write(furniture.name+"<br>"+furnitureStoresArray+"<br>");
//     };
// };

function apartmentObject(num){

    for(i=0; i<num; i++){

        var apartment = {};

        apartment.address = prompt("Indicate the address of  the apartment")
        apartment.rentPrice =+ prompt("Indicate the rent price of  the apartment")
        apartment.buyingPrice =+ prompt("Indicate the buying price of  the apartment")
        apartment.isMediation = confirm("is their a mediation")

        var interestedArray = [];
        var numberOfInterested =+ prompt("The number of interested:")

        for(j=0; j<numberOfInterested; j++){
            apartment.interested = prompt("name of the person interested in the apartment");
            interestedArray.push(apartment.interested);
        }

        interestedArray.push(apartment.interested);

        if(!apartment.isMediation){
            document.write(apartment.address+"<br>"+interestedArray);
        }
    };
};

// function countryObject(){

//     var num =+ prompt("enter a number");
//     var citiesArray = [];

//     for(i=0; i<num; i++){
//         var country = {};
//         country.name = prompt("enter the country name");
//         country.numberOfCitizens =+ prompt("enter the number of citizens in the country");
//         country.cities = prompt("enter a city name");
//         country.chabadHouse = confirm("is there a Chabad house in this country?");

//         citiesArray.push(country.cities);

//         if(country.chabadHouse){
//             document.write(country.name+"<br>"+country.cities)
//         };
//     };
// };

// function movieObject(){
//     var userNum =+ prompt("enter a number")
//     var img = document.querySelector("img"); 

//     for(i=0; i<userNum; i++){
//         var movie = {};
//         movie.name = prompt("enter a movie name") 
//         movie.numberOfViews =+ prompt("enter a movie name") 
//         movie.year =+ prompt("enter a movie name") 
//         movie.image = prompt("enter a movie image")

        
        
//         document.write(
//             "<h1>"+movie.name+"-"+movie.year+"</h1>"+ "<br>"+
//             <img src=""+movie[image]+ "<br>"+
//             "<span>"+movie.numberOfViews+"</span>"
//         )
//     };
// };

// var image_input = document.querySelector("#image-input");
// image_input.addEventListener("change", function() {
//   var reader = new FileReader();
//   reader.addEventListener("load", () => {
//     var uploaded_image = reader.result;
//     document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });