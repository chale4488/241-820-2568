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
const mysql = require('mysql2/promise');
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;
let conn = null
const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'webdb',
        port:8820
    })
}

//path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
app.get('/users', async (req,res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})



// app.get('/testdb',(req,res)=>{
//     mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'root',
//         database:'webdb',
//         port:8820
//     }).then((conn)=>{
//         conn.query('SELECT * FROM users')
//             .then((results)=>{
//                 res.json(results[0]);
//             }).catch((err)=>{
//                 console.error(err);
//                 res.status(500).json({ error:'Database query error'});
//             });
//     })
// })



// app.get('/testdb-new', async (req,res)=>{
//     try{
//         const conn = await mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'root',
//         database:'webdb',
//         port:8820
//     })
//     const [results] = await conn.query('SELECT * FROM users');
//     res.json(results[0]);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({ error: 'Database query error'});
//     }
     
// })


//path = GET /users
app.get('/users',  (req, res) => {
    res.json(users);
});

//path = POST /user
// app.post('/user', (req, res) => {
//     let user = req.body;
//     user.id = counter
//     counter += 1
//     users.push(user);
//     res.json({ 
//         message: 'User added successfully', 
//         user: user });
// })

//path new post
app.post('/users',async (req,res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?',user);
    console.log('results: ',results)
    res.json({ 
        message: 'User created successfully', 
        data: results[0]
        });
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

app.listen(port,async()=>{
    await initDBConnection();
    console.log(`Server is running on port ${port}`);
});


