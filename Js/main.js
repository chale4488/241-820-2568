// // // // // // // console.log("Hello, World"); 
// // // // // // // ตัวแปรที่มีคือ String,Number,Boolean,Object,Array

// // // // // // // String
// // // // // // let fname = "John";

// // // // // // // Number
// // // // // // let age = 30;
// // // // // // let height = 5.9;

// // // // // // console.log("Name :",fname);
// // // // // // console.log("Age :",age);
// // // // // // console.log("Height :",height);


// // // // // // +  = บวก
// // // // // // - = ลบ
// // // // // // * = คูณ
// // // // // // / = หาร
// // // // // // % = mod

// // // // // // let number1 = 10;
// // // // // // let number2 = 3;

// // // // // // let result = number1 + number2;

// // // // // // console.log("ผลบวก  = ",result);


// // // // // /** 
// // // // //   == เท่ากับ
// // // // //   != ไม่เท่ากับ
// // // // //   > มากกว่า
// // // // //   < น้อยกว่า
// // // // //   >= มากกว่าเท่ากับ
// // // // //   <= น้อยกว่าเท่ากับ
// // // // //  */

// // // // // // let number1 = 5;
// // // // // // let number2 = 5;
// // // // // // let condition = number1 < number2 ; //boolean 
// // // // // // console.log("condition :",condition);

// // // // // // if- else  condition
// // // // // // if (number1 > number2){
// // // // // //     console.log("this is if");

// // // // // // }else if(number1 < number2){
// // // // // //     console.log("this is else if")
// // // // // // }
// // // // // // else{
// // // // // //     console.log("This is else");
// // // // // // }


// // // // // /**
// // // // //  Grade
// // // // //  >= 80 = A
// // // // //     >= 70 B
// // // // //     >= 60 C
// // // // //     >= 50 D
// // // // //     < 50 F
// // // // //  */

// // // // //     // let score = 85;
// // // // //     // if(score>=80){
// // // // //     //     console.log("Grade : A")
// // // // //     // }else if(score >=70){
// // // // //     //     console.log("Grade : B")
// // // // //     // }else if(score >= 60){
// // // // //     //     console.log("Grade : C")
// // // // //     // }else if(score>=50){
// // // // //     //     console.log("Grade : D")
// // // // //     // }else{
// // // // //     //     console.log("Grade : F")
// // // // //     // }

// // // // // // let number1 = 5;
// // // // // // let number2 = 10;

// // // // // // let condition = (number1 > 0)&&(number2 > 0)
// // // // // // console.log("Condition:",condition);

// // // // // // let age = 25;
// // // // // // let gender = "Female";
// // // // // // if(age >= 18 && gender == "Female"){
// // // // // //     console.log("คุณสามารถเข้าร่วมกิจกรรมได้")
// // // // // // }

// // // // // // let number1 = 20;

// // // // // // if(!(number1 % 2 == 0)){
// // // // // //     console.log("Even")
// // // // // // }else{
// // // // // //     console.log("Odd")
// // // // // // }

// // // // // // let conter = 0;
// // // // // // while(conter <= 11 ){
// // // // // //     conter = conter+1
// // // // // //     console.log("While :",conter);
// // // // // // }

// // // // // // for(i =1;i <=5; i++){
// // // // // //     console.log("For:",i)
// // // // // // }


// // // // // // /** 
// // // // // //  * Array** /

// // // // // let age1 = 25;
// // // // // let age2 = 30
// // // // // let age3 = 35;
// // // // // console.log(age1,age2,age3);
// // // // // let age = [25,30,35];

// // // // // console.log(age);
// // // // // console.log(age[1]);
// // // // // // แทนที่ค่าในอาเรย์
// // // // // age = [40,45,50];
// // // // // console.log(age);

// // // // // // ต่อค่าในอาเรย์
// // // // // age.push(55);
// // // // // console.log(age);
// // // // // console.log(age.length)

// // // // // age.pop();
// // // // // console.log(age)

// // // // // //Lการใช้คำสั่ง includers() หาค่าที่ต้องการใน Array

// // // // // if(age.includes(45)){
// // // // //     console.log("พบ 45 ใน Array");
// // // // // }

// // // // // let number = [90,60,80,40,50];
// // // // // console.log(number);
// // // // // number.sort();
// // // // // console.log(number);

// // // // // let names = ["John","Jim","Jin"];
// // // // // console.log(names)
// // // // // console.log(names.length);
// // // // // names.pop();
// // // // // names.push("June");
// // // // // console.log(names);
// // // // // console.log(names.length);
// // // // // console.log(names[2]);

// // // // // for (let i =0;i< names.length;i++){
// // // // //     console.log(names[i])
// // // // // }




// // // // /** Object in javascript */


// // // // // let age = 30;
// // // // // let name = "John";
// // // // // let grade = 'A';

// // // // // let age2 = 25,name2 = "Alice",grade2 = 'B';

// // // // let student = [{
// // // //     age:20,
// // // //     name:"Emma",
// // // //     grade:'A'
// // // // },{
// // // //     age:22,
// // // //     name:"Alice",
// // // //     grade:'B'
// // // // }];
// // // // student.pop();

// // // // for (let i = 0;i < student.length;i++){
// // // //     console.log("Student:",+(i+1));
// // // //     console.log("Name:"+student[i].name);
// // // //     console.log("Age :",+student[i].age);
// // // //     console.log("Grade : "+student[i].grade);

// // // // }
// // // // student.push({
// // // //     age:21,
// // // //     name:"Olivia",
// // // //     grade:'A'
// // // // })
// // // // console.log(student);



// // // /** Function in Javascript */

// // // // Define Function

// // // function calculate_grade(score){
// // //     if (score>=90){
// // //         grade ='A'
        
// // //     }else if (score >=80){
// // //         grade ='B'
// // //     }else if (score >= 70){
// // //         grade = 'C'
// // //     }else if (score >= 60){
// // //         grade = 'D'
// // //     }
// // //     else {grage = 'F'}
// // //     return grade;
// // // }

// // // // call function calculate_grade

// // // let student_score = 85;
// // // let student_grade = calculate_grade(student_score);

// // // console.log("Student grade : "+student_grade);


// // // Array

// // let score = [10,20,30,40,50];
// // for (let i = 0; i< score.length;i++){
// //     // console.log(score[i])
// //     console.log(`Score at index ${i+1} is ${score[i]}`);

// //     // `  เครื่องหมายนี้คล้าย f string in python กด alt+numpad9+6
// // }

// // //Another way Loop to show index
// // score.forEach((s)=>{
// //     console.log('Score '+s)
// // })

// // score = score.map((s)=>{
// //     return s * 2
// // })

// // score.forEach((n)=>{
// //     console.log('New score: ',n)
// // })


// let score = [10,20,30,40,50];



// for (let index = 0; index < score.length;index++){
//     console.log('score :',score[index])
//     // if(score[index]>=30){
//     //     newScore.push(score[index]);
//     // }
// }
// // console.log('New Score',newScore)

// let newScore = score.filter((s)=>{
//     // if( s >= 30){
//     //     return true
//     // }else{return false}
//     return s >= 30
// })
// newScore.forEach((s)=>{
//     console.log('New Score: ',s)
// })




/** Object + function */

let students = [
    {
        name:'aa',
        score:50,
        grade:'A'
    },
    {
        name:'bb',
        score:60,
        grade:'B'
    }
]

console.log('Student : ',students[0])

let student = students.find((s)=>{
    if(s.name=='bb'){
        return true
    }
})

let doublescore_student = students.map((s)=>{
    s.score = s.score*2
    return s 
})

console.log('Student: ',student)

console.log(doublescore_student)

let hightScore_student = students.filter((s)=>{
    if(s.score >= 110){
        return true
    }
})

console.log('High Score: ',hightScore_student)