// // ทำการ import http module เพื่อสร้าง server

// const http = require('http');
// const host = 'localhost';
// const port = 8000;

// //กำหนดค่าเริ่มต้นของ server เมื่อเปิดใช้งาน เว็บผ่านเบราว์เซอร์ที่ Localhost:8000

// const requestListener = function(req,res){
//     res.writeHead(200);
//     res.end('My First Server!');
// }

// // Run Server

// const server = http.createServer(requestListener);
// server.listen(port,host,() => {
//     console.log(`Server is running at http://${host}:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;
//path = GET /users
app.get('/users',  (req, res) => {
    res.json(users);
});

//path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({ 
        message: 'User added successfully', 
        user: user });
})

//path = put/user/:id
app.patch('/user/:id',(req,res)=>{
    let id = req.params.id;
    let updatedUser = req.body;
    //user จาก id ที่ส่งมา
    let selectIndex = users.findIndex(user => user.id == id);
    //อัพเดตข้อมูล user
    if(updatedUser.name){
        users[selectIndex].name = updatedUser;
    }
    if(updatedUser.age){
        user[selectIndex].age = updatedUser;
    }
    // users[selectIndex].name = updatedUser.name || users[selectIndex].name;
    // users[selectIndex].age = updatedUser.age || users[selectIndex].age;


    //เอาข้อมูลที่ update ส่ง response กลับไป

    res.json({message: 'User added successfully', 
        data:{
            user:updatedUser,
            indexUpdated: selectIndex
        }
    });
})

//Path = DELETE /user/:id
app.delete('/user/:id',(req,res)=>{
    let id = req.params.id;
    //หา id ที่ต้องการลบ
    let selectIndex = users.findIndex(user => user.id == id);
    //ลบ user จาก arr
    users.splice(selectIndex,1)
    
    res.json({
        message:'User deleted successfully',
        indexDeleted:selectIndex
    });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});


