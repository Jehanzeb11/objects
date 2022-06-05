// question 1 



// let itemsArray = [
//         {name: "juice",
//         prize: 50,
//         quantity: 3},

//         {name: "Cookie",
//         prize: 30,
//         quantity: 9},

//         {name: "Shirt",
//         prize: 880,
//         quantity: 1},

//         {name: "Pen",
//         prize: 100,
//         quantity: 2}
// ];




// let item1 = (itemsArray[0].prize) * (itemsArray[0].quantity);
// let item2 = (itemsArray[1].prize) * (itemsArray[1].quantity);
// let item3 = (itemsArray[2].prize) * (itemsArray[2].quantity);
// let item4 = (itemsArray[3].prize) * (itemsArray[3].quantity);
// let total = item1 + item2 + item3 + item4


// document.write("total price of juices are   : "+item1+"<br>");
// document.write("total price of cookie are   : "+item2+"<br>");
// document.write("total price of shirt are   :  "+item3+"<br>");
// document.write("total price of pen are   :  "+item4+"<br>");
// document.write("total price of whole items are   : "+total+"<br>");








// question 2

// let obj = {
//     name: "JEHANZEB",
//     email: "jehanzebsiddiqui287@gmail.com",
//     password: "abc123",
//     age: 19,
//     gender: "male",
//     city: "karachi",
//     country: "pakistan"
// }

// let chkAge = "age" in obj;
// console.log(chkAge)

// let chkCont = "country" in obj;
// console.log(chkAge)

// let chkFname = "firstName" in obj;
// console.log(chkFname)

// let chkLname = "lastName" in obj;
// console.log(chkLname)









// question 3



// function Constructor(name,age,city,country){
//     this.n = name
//     this.a = age
//     this.c = city
//     this.co = country
// }

// let con1 = new Constructor('jehanzeb',19,'karachi','pakistan')
// let con2 = new Constructor('jawad',18,'karachi','pakistan')
// let con3 = new Constructor('junaid',20,'karachi','pakistan')


// console.log(con1)
// console.log(con2)
// console.log(con3)








// question 4 


// function Population(Name, gender, address, education, profession) {  
//     this.name =Name 
//     this.gender =gender 
//     this.address = address
//     this.education = education  
//     this.profession =  profession 
// }
// var ans = new Population(prompt("Enter Name"),

//      prompt(`<p>Please select your Gender:</p>
//       <input type="radio" id="male" name="gender" value="male">
//       <label for="male">Male</label><br>
//       <input type="radio" id="female" name="gender" value="female">
//       <label for="female">Female</label><br>`),
      
//       prompt("Enter Address"),
      
//       prompt(`<label for="education">Choose your education:</label>
//       <select name="education" id="education">
//         <option value="grad">Graduate</option>
//         <option value="undergrad">Undergraduate</option>
//         <option value="inter">Intermediate</option>
//         <option value="matric">Matriculation</option>
//     </select>`),
   
//     prompt(`<label for="profession">Choose your profession:</label>
//     <select name="profession" id="profession">
//         <option value="teacher">Teacher</option>
//         <option value="doctor">Doctor</option>
//         <option value="Programmer">Programmer</option>
//         <option value="athlete">athlete</option>
//     </select>`))

// console.log(ans)
